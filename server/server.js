/** @format */

//basic imports
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();

//direct controller imports
const sessionController = require('./controllers/sessionController');
const cookieController = require('./controllers/cookieController');

//route imports
const signupRouter = require('./routes/signupRoute');
const signinRouter = require('./routes/signinRoute');
const properties = require('./routes/properties');
const ownedProperties = require('./routes/ownedProperties');
const addFavsRouter = require('./routes/addFavsRoute');
const getFavsRouter = require('./routes/getFavsRoute');
const removeFavRouter = require('./routes/removeFavRoute');
//db connection
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(console.log('Connected to DB'))
  .catch((err) => console.log('Mongo DB Connection Error:', err));

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/register', signupRouter);
app.use('/signin', signinRouter);
app.use('/properties', properties);
app.use('/ownedProperties', ownedProperties);
app.use('/addFav', addFavsRouter);
app.use('/getFavs', getFavsRouter);
app.use('/removeFav', removeFavRouter)
//check login route
app.use('/checkLogin', sessionController.isLoggedIn, (req, res) => {
  return res.status(299).send('user is logged in');
});

//serve index.html - NOTE - THIS ROUTE NEVER ACTUALLY HITS (react router serves up the page??)
app.get('/', cookieController.setCookie, (req, res) => {
  return res.status(201).sendFile(path.join(__dirname, '.././index.html'));
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error.',
    status: 400,
    message: { err: 'An unknown error occurred.' },
  };
  Object.assign(defaultErr, err);
  console.log(defaultErr.log);
  return res.status(defaultErr.status).json(defaultErr.message);
});

//listen on 3000
app.listen(3000, () => {
  console.log('Server listening on 3000');
});
