//basic imports
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

//direct controller imports
const sessionController = require('./controllers/sessionController')

//route imports
const signupRouter = require('./routes/signupRoute')
const signinRouter = require('./routes/signinRoute')

//db connection
//note - if this does not work for you, i may need to add your ip as verified to mongo - adam
mongoose.connect(
  process.env.DB_CONNECT_STRING)
  .then(console.log('Connected to DB: ENV Test String: ', process.env.TEST_STRING))
  .catch((err) => console.log('Mongo DB Connection Error:', err));
const fetch = require('node-fetch');
const { URL, URLSearchParams } = require('url');

app.use(express.json());

//server test route
app.use('/testRoute', (req, res) => {
  return res.status(299).send('test success')
});

//signup route
app.use('/register', signupRouter);

//signin route
app.use('/signin', signinRouter);

//serve index.html
app.get('/', (req, res) => {
  return res
    .status(201)
    .sendFile(path.join(__dirname, '.././index.html'))
});

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
  let result = await fetch(url, { method: 'GET', headers: headers });
  result = await result.json();
  // console.log(result);
  result = { features: 
    result['props']
      .filter(x => ! isNaN(Number(x.zpid)))
      .map(({ zpid, latitude, longitude, address, price, propertyType, livingArea, bedrooms, bathrooms }) => ({
        type: 'Feature',
        properties: {
          Address: address,
          'Monthly rent': `$${price}`,
          Type: propertyType,
          Size: `${livingArea} sqft`,
          '# bedrooms': bedrooms,
          '# bathrooms': bathrooms
        },
        geometry: {
          coordinates: [longitude, latitude],
          type: 'Point'
        }
      }))
  };
  return res.status(200).json(result);
});

//listen on 3000
app.listen(3000, () => {
  console.log('Server listening on 3000');
});
