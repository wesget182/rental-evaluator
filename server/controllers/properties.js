const fetch = require('node-fetch');
const { URL, URLSearchParams } = require('url');
const { quantileSorted } = require('d3');

const middlewares = {};

const headers = {
  'x-rapidapi-key': '',
  'x-rapidapi-host': 'zillow-com1.p.rapidapi.com',
  'useQueryString': true
};

const calcMortgage = (price, int, down = 0.2, years = 30) => {
  const r = int / 12;
  return price * (1 - down) / (1 - r) / (1 - (1 - r) ** (12 * years)) * r;
};

middlewares.getPropertiesForSale = async (req, res, next) => {
  console.log(req.query);
  const url = new URL('https://zillow-com1.p.rapidapi.com/propertyExtendedSearch');
  const params = {
    location: req.query.location,
    status_type: 'ForSale',
  };
  if (req.query.home_type !== '')  params.home_type = req.query.home_type;
  if (typeof req.query.bedsMin === 'number') params.bedsMin = req.query.bedsMin;
  if (typeof req.query.bathsMin === 'number') params.bathsMin = req.query.bathsMin;
  // const params = {
  //   location: '111 Balcaro Way UNIT 88, Sacramento, CA 95834',
  //   // location: '2470 Peachtree Ln, San Jose, CA 95128',
  //   // location: 'san jose, ca',
  //   // location: 'mountain view, ca',
  //   status_type: 'ForSale',
  //   // home_type: 'Houses',
  //   bathsMin: '2',
  //   bathsMax: '2',
  //   bedsMin: '2',
  //   bedsMax: '2'
  // };
  url.search = new URLSearchParams(params).toString();
  console.log(url);
  const result = await fetch(url, { method: 'GET', headers: headers })
    .then(res => res.json());
  console.log(result);

  if ('zpid' in result) {
    res.locals.zpid = result.zpid;  
  } else if ('totalResultCount' in result) {
    if (result.totalResultCount > 0) {
      res.locals.propertiesForSale = { 
        type: 'FeatureCollection',
        features: result['props']
          .filter(x => ! isNaN(Number(x.zpid)))
          .map(({ latitude, longitude, address, price, propertyType, livingArea, bedrooms, bathrooms, imgSrc, zpid }) => ({
            type: 'Feature',
            properties: {
              Address: address,
              Price: `$${price}`,
              Type: propertyType,
              Size: `${livingArea} sqft`,
              '# bedrooms': bedrooms,
              '# bathrooms': bathrooms,
              Image: imgSrc,
              ZPID: zpid
            },
            geometry: {
              coordinates: [longitude, latitude],
              type: 'Point'
            }
          }))
      };
    }
  } else {
    return next({
      log: 'getPropertiesForSale: ERROR: Invalid search query.',
      status: 400,
      message: { err: 'getPropertiesForSale: ERROR: Invalid search query.'}
    });
  }

  return next();
};

middlewares.getTargetForSale = async (req, res, next) => {
  const url = new URL('https://zillow-com1.p.rapidapi.com/property');
  const params = {
    zpid: req.params.zpid
  };
  url.search = new URLSearchParams(params).toString();
  console.log(url);
  const result = await fetch(url, { method: 'GET', headers: headers })
    .then(res => res.json());

  if ('zpid' in result) {
    const { latitude, longitude, address, price, mortgageRates, homeType, livingArea, bedrooms, bathrooms, imgSrc, zpid } = result;
    res.locals.targetForSale = {
      type: 'FeatureCollection',
      features:
        [{
          type: 'Feature',
          properties: {
            'Street address': address.streetAddress,
            City: address.city,
            State: address.state,
            'Zip code': address.zipcode,
            Address: `${address.streetAddress}, ${address.city}, ${address.state} ${address.zipcode}`,
            Price: `$${price}`,
            'Interest rate': mortgageRates.thirtyYearFixedRate,
            Type: homeType,
            Size: `${livingArea} sqft`,
            '# bedrooms': bedrooms,
            '# bathrooms': bathrooms,
            'Est. monthly mortgage': Math.round(calcMortgage(price, mortgageRates.thirtyYearFixedRate / 100)),
            'Rent array': 'N/A',
            'Est. monthly rent': 'N/A',
            'Price-to-rent ratio': 'N/A',
            Rating: 'N/A',
            Image: imgSrc,
            ZPID: zpid
          },
          geometry: {
            coordinates: [longitude, latitude],
            type: 'Point'
          }
        }]
    };
  } else {
    return next({
      log: 'getTargetForSale: ERROR: Unable to get result of target property.',
      status: 400,
      message: { err: 'getTargetForSale: ERROR: Unable to get result of target property.'}
    });
  }

  return next();
};

middlewares.getPropertiesForRental = async (req, res, next) => {
  const url = new URL('https://zillow-com1.p.rapidapi.com/propertyExtendedSearch');
  // const params = {
  //   'location': req.params.zip,
  //   'status_type': 'ForRent',
  //   // 'home_type': 'Houses',
  //   'bathsMin': '2',
  //   'bathsMax': '2',
  //   'bedsMin': '2',
  //   'bedsMax': '2'
  // };
  url.search = new URLSearchParams(req.params).toString();
  console.log(url);
  const result = await fetch(url, { method: 'GET', headers: headers })
    .then(res => res.json());

  if ('totalResultCount' in result) {
    if (result.totalResultCount > 0) {
      res.locals.propertiesForRental = { 
        type: 'FeatureCollection',
        features: result['props']
          .filter(x => ! isNaN(Number(x.zpid)))
          .map(({ latitude, longitude, address, price, propertyType, livingArea, bedrooms, bathrooms, imgSrc, zpid }) => ({
            type: 'Feature',
            properties: {
              Address: address,
              'Monthly rent': `$${price}`,
              Type: propertyType,
              Size: `${livingArea} sqft`,
              '# bedrooms': bedrooms,
              '# bathrooms': bathrooms,
              Image: imgSrc,
              ZPID: zpid
            },
            geometry: {
              coordinates: [longitude, latitude],
              type: 'Point'
            }
          }))
      };
      if ('targetForSale' in res.locals) {
        const target = res.locals.targetForSale['features'][0]['properties'];
        const rentArr = res.locals.propertiesForRental['features'].map(p => Number(p['properties']['Monthly rent'].slice(1))).sort((a, b) => a - b);
        const rent = quantileSorted(rentArr, 0.5);
        const ratio = Math.round(Number(target['Price'].slice(1)) / (rent * 12));
        const rating = (ratio <= 15) ? 'Strong buy' : (ratio >= 21) ? 'Strong no buy' : 'No buy';
        Object.assign(target, {
          'Rent array': rentArr,
          'Est. monthly rent': rent,
          'Price-to-rent ratio': ratio,
          'Rating': rating
        });
      }
    }
  } else {
    return next({
      log: 'getPropertiesForRental: ERROR: Invalid search query.',
      status: 400,
      message: { err: 'getPropertiesForRental: ERROR: Invalid search query.'}
    });
  }

  return next();
};

module.exports = middlewares;
