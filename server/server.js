const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

/*
TD
-add mongo connection string to env
*/

//CONNECT TO DB
mongoose.connect(
  'TEMP')//put real string in env
  .then(console.log('Connected to DB'))
  .catch((err) => console.log('Mongo DB Connection Error:', err))

app.use(express.json());

//serve index.html
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '.././index.html'));
});

app.get('/clickme', (req, res) => {
  return res.status(200).json('Clicked!');
});

//listen on 3000
app.listen(3000, () => {
  console.log('Server listening on 3000');
}); 