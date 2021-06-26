//basic imports
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

//route imports
const signupRouter = require('./routes/signupRoute')

/*
TD
-add mongo connection string to env
-use passport js??
*/

//CONNECT TO DB
mongoose.connect(
  process.env.DB_CONNECT_STRING)
  .then(console.log('Connected to DB: ENV Test String: ', process.env.TEST_STRING))
  .catch((err) => console.log('Mongo DB Connection Error:', err));

app.use(express.json());

//serve index.html
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '.././index.html'));
});

//server test route
app.use('/testRoute', (req, res) => {
  return res.status(299).send('test success')
});

//signup route
app.use('/register', signupRouter);

// //test
// app.get('/clickme', (req, res) => {
//   return res.status(200).json('Clicked!');
// });

//listen on 3000
app.listen(3000, () => {
  console.log('Server listening on 3000');
}); 