//basic imports
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const cors = require('cors');
const fetch = require('node-fetch');
const { URL, URLSearchParams } = require('url');
const { getRoutes } = require('get-routes');
//direct controller imports
const sessionController = require('./controllers/sessionController');
const cookieController = require('./controllers/cookieController');

//route imports
const signupRouter = require('./routes/signupRoute');
const signinRouter = require('./routes/signinRoute');
const properties = require('./routes/properties');
const addFavsRouter = require('./routes/addFavsRoute');
const getFavsRouter = require('./routes/getFavsRoute');

//db connection
//note - if this does not work for you, i may need to add your ip as verified to mongo - adam
//note - db connection issues?  check for console logs in terminal
const connectionString =
  'mongodb+srv://admin:adam123@cluster0.tqcgi.mongodb.net/scratch_project?retryWrites=true&w=majority';
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('Connected to DB: ENV Test String: ', connectionString))

  .catch((err) => console.log('Mongo DB Connection Error:', err));

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// server test route
app.use('/testRoute', (req, res) => {
  //test stuff here
});

//signup route
app.use('/register', signupRouter);

//signin route
app.use('/signin', signinRouter);

//properties route
app.use('/properties', properties);

//add favorites route
app.use('/addFav', addFavsRouter);

//get favorites route
app.use('/getFavs', getFavsRouter);

//check login route
app.use('/checkLogin', sessionController.isLoggedIn, (req, res) => {
  return res.status(299).send('user is logged in');
});

//serve index.html - NOTE - THIS ROUTE NEVER ACTUALLY HITS (react router serves up the page??)
app.get('/', cookieController.setCookie, (req, res) => {
  return res.status(201).sendFile(path.join(__dirname, '.././index.html'));
});

// print all routes
// const routes = getRoutes(app);

// console.log('#### routes ##### ');
// console.log(routes);
// Global error handler
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
