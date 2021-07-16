/** @format */

const express = require('express');
const router = express.Router();

const propertyController = require('../controllers/properties');

// handler for submitted form with a single address or area search
router.all(
  '/',
  propertyController.getPropertiesForSale,
  (req, res, next) => {
    if ('zpid' in res.locals) {
      req.params.zpid = res.locals.zpid;
      propertyController.getTargetForSale(req, res, next);
    } else {
      return next();
    }
  },
  (req, res, next) => {
    if ('targetForSale' in res.locals) {
      const target = res.locals.targetForSale['features'][0]['properties'];
      Object.assign(req.params, {
        location: target['Zip code'],
        status_type: 'ForRent',
        home_type: target['Type'],
        bedsMin: target['# bedrooms'],
        bedsMax: target['# bedrooms'],
        bathsMin: target['# bathrooms'],
        bathsMax: target['# bathrooms'],
      });
      propertyController.getPropertiesForRental(req, res, next);
    } else {
      return next();
    }
  },
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

// handler for a clicked address search on a property pinned on the map
router.post(
  '/target',
  (req, res, next) => {
    res.locals.targetForSale = {
      features: [
        {
          properties: {
            Price: req.query.Price,
            ZPID: req.query.ZPID,
          },
        },
      ],
    };
    Object.assign(req.params, {
      location: req.query.location.slice(-5),
      status_type: 'ForRent',
      home_type: req.query.home_type,
      bedsMin: req.query.beds,
      bedsMax: req.query.beds,
      bathsMin: req.query.baths,
      bathsMax: req.query.baths,
    });
    propertyController.getPropertiesForRental(req, res, next);
  },
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

router.post('/newProperty', propertyController.addNewProperty, (req, res) => {
  res.status(200).send(res.locals);
});

router.post('/listProperties', propertyController.getOwnedProperties, (req, res) => {
  res.status(200).send(res.locals);
});

router.post('/addTenantInfo', (req, res) => {
  res.status(200).send(res.locals);
});

router.post('/addFinancialInformation', (req, res) => {
  res.status(200).send(res.locals);
});

module.exports = router;
