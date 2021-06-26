//basic imports
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

//route imports
const signupRouter = require('./routes/signupRoute')
const signinRouter = require('./routes/signinRoute')

//db connection
//note - if this does not work for you, i may need to add your ip as verified to mongo - adam
mongoose.connect(
  process.env.DB_CONNECT_STRING)
  .then(console.log('Connected to DB: ENV Test String: ', process.env.TEST_STRING))
  .catch((err) => console.log('Mongo DB Connection Error:', err));

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

//listen on 3000
app.listen(3000, () => {
  console.log('Server listening on 3000');
});
