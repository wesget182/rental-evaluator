const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

//do we need this?  i forget
app.use(express.json());

//serve index.html
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '.././index.html'));
});
// app.use('/', express.static(path.resolve(__dirname, '../dist')));


app.get('/clickme', (req, res) => {
  return res.status(200).json('Clicked!');
})

//listen on 3000
app.listen(3000, () => {
  console.log('Server listening on 3000');
}); 