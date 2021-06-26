const User = require('../models/userModel');
const userController = {};

/*
TODO:
-bcrypt
-oauth
*/

//USER CREATION - STANDARD (no OAuth)
userController.createUser = (req, res, next) => {
  if (req.body.username && req.body.password) {
    User.create({
      username: req.body.username, 
      email: req.body.email,
      password: req.body.password});
  } else {
    console.log('userController.createUser error');
  }
  next();
};

//USER VERIFICATION - STANDARD (no OAuth)
userController.verifyUser = (req, res, next) => {
  //find user
  User.find({
    username: req.body.username,
    password: req.body.password,
  })
    .then(data=>{
      //if nothing is returned (user not found)
      if(data[0] === undefined){
        console.log('userController.verifyUser error');
        return res.status(302).send('bad login');
      }
      else return next();
    }); 
};


module.exports = userController;