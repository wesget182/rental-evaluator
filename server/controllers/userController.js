const User = require('../models/userModel');
const userController = {};
const bcrypt = require('bcrypt');
const salt_rounds = 10;


//USER CREATION - STANDARD (no OAuth)

userController.createUser = (req, res, next) => {
  //check request for correct data
  if (req.body.name && req.body.password) {
    //perform encryption
    bcrypt.hash(req.body.password, salt_rounds, (error, hash) => {
      //error check
      if (error) res.status(500).json(error)
      //create user w encrypted pw
      else {
        User.create({
          username: req.body.name,
          email: req.body.email,
          password: hash
        })
      }
    })
    next()
  }
  else console.log('usercontroller.createuser error - no data recieved')
}

//USER VERIFICATION - STANDARD (no OAuth)

userController.verifyLogin = (req, res, next) => {
  //find by username
  User.findOne({email: req.body.email})
  .then(user => {
    //if none found, return error
    if(!user) res.status(405).send('No user found')
    //if user found, compare passwords
    else {
      bcrypt.compare(req.body.password, user.password, (error, match) => {
        //handle weird errors
        if (error) res.status(500).json(error)
        //login success
        else if (match) {
          //res.status(203).send('Login Success')
          next()
        }
        //login fail (incorrect pw)
        else return res.status(403).send('incorrect password')
        //what happens here???
      })
    }
  })
  .catch(error => {
    res.status(500).json(error)
  })
}

userController.setSSIDCookie = (req, res, next) => {
  User.findOne({email: req.body.email})
  .then((data) => {
    const id = data.id;
    res.locals.cookie = id;
    console.log('res 1,', res.locals.cookie)
    res.cookie("ssid", id, {httpOnly: true});
  })
  .then(() => next())
}


module.exports = userController;