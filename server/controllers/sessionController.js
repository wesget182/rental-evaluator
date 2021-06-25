const session = require('express-session');
const mongoose = require('mongoose');

const sessionController = {};

/*
TODO:
-when are we creating sessions vs just using cookies?
*/





//BELOW IS IN CASE WE WANT TO USE EXPRESS-SESSION AND MONGO STORE
// //MONGO CONNECTION
// const MongoStore = require('connect-mongo')(session);
// const dbString = process.env.DB_CONNECT_STRING;//dummy string - put the real string in env and put it here
// const dbOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// };
// const connection = mongoose.createConnection(dbString,dbOptions);

// const sessionStore = new MongoStore({
//   mongooseConnection: connection,
//   collection: 'sessions'
// });

// //CREATE NEW SESSION - when do we want to do this?  on login?
// sessionController.newSession = session({
//   secret: 'TEMP SECRET', //store a real secret in env
//   resave: false, //not sure what this does
//   saveUninitialized: true, //not sure what this does either
//   store: sessionStore, //sessionStore should = mongoDB collection for sessions
//   cookie: {
//     maxAge: 1000 * 60 * 60 * 24 //this equals one day
//     //sessionStore: add to mongo collection
//   }
// });

module.exports = sessionController;





