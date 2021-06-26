const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const { URL, URLSearchParams } = require('url');

//do we need this?  i forget
app.use(express.json());

//serve index.html
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '.././index.html'));
});

// app.get('/clickme', (req, res) => {
//   return res.status(200).json('Clicked!');
// });

app.get('/clickMe', async (req, res) => {
  const url = new URL('https://zillow-com1.p.rapidapi.com/propertyExtendedSearch');
  const params = {
    'location': 'mountain view, ca',
    'status_type': 'ForRent',
    // 'home_type': 'Houses',
    'bathsMin': '2',
    'bathsMax': '2',
    'bedsMin': '2',
    'bedsMax': '2'
  };
  const headers = {
    'x-rapidapi-key': 'e6dd16a9e5msh39232bd8e06c20ap181d30jsn4e86e05be870',
    'x-rapidapi-host': 'zillow-com1.p.rapidapi.com',
    'useQueryString': true
  };
  url.search = new URLSearchParams(params).toString();
  console.log(url);
  const result = await fetch(url, { method: 'GET', headers: headers });
  const result1 = await result.json();
  // const result2 = result1['props'].map(({ zpid, latitude, longitude, address, price }) => ({ zpid, latitude, longitude, address, price }));
  const result2 = { features: 
    result1['props']
      .filter(x => !isNaN(Number(x.zpid)))
      .map(({ zpid, latitude, longitude, address, price }) => ({
        type: 'Feature',
        properties: {
          title: address,
          description: address
        },
        geometry: {
          coordinates: [longitude, latitude],
          type: 'Point'
        }
      }))
  };
  // console.log(result1['props']);
  console.log(result2);
  return res.status(200).json(result2);
  // const listings = result.map(obj => {...obj});
  // for (let i = 0; i < Math.min(result1['props'].length, 3); i++) {
  //   listings[i] = await fetch(`https://zillow-com1.p.rapidapi.com/property?zpid=${result1['props'][i].zpid}`, { method: 'GET', headers: headers });
  //   listings[i] = await listings[i].json();
        
  // }
});

//listen on 3000
app.listen(3000, () => {
  console.log('Server listening on 3000');
}); 