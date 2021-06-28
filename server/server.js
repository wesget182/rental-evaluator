const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
// const fetch = require('node-fetch');
// const { URL, URLSearchParams } = require('url');

// Import express routers
const properties = require('./routes/properties');

//do we need this?  i forget
app.use(express.json());

//serve index.html
app.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(path.join(__dirname, '.././index.html'))
});
//app.use('/', express.static(path.resolve(__dirname, '.././index.html')));

app.use('/properties', properties);

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error.',
    status: 400,
    message: { err: 'An unknown error occurred.'}
  };
  Object.assign(defaultErr, err);
  console.log(defaultErr.log);
  return res.status(defaultErr.status).json(defaultErr.message);
});

//listen on 3000
app.listen(3000, () => {
  console.log('Server listening on 3000');
});
