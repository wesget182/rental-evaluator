const User = require('../models/userModel');
const userController = {};
const bcrypt = require('bcrypt');
const salt_rounds = 10;

//USER CREATION - STANDARD (no OAuth)
//success - next()
//fail - sends obj {success: false}, return out

userController.createUser = (req, res, next) => {
  //check request for correct data
  if (req.body.name && req.body.password) {
    //perform encryption
    bcrypt.hash(req.body.password, salt_rounds, (error, hash) => {
      //error check
      if (error) console.log('bcrypt error');
      //create user w encrypted pw
      else {
        const user = new User({
          username: req.body.name,
          email: req.body.email,
          password: hash,
        });
        user
          .save()
          //   (err, result) => {
          //   if (err) {
          //     //if there is a duplication, sends back message on res.data
          //     return res.send({success: false})
          //   } else {
          //     //else, successful add, go to next
          //     next();
          //   }
          // })
          .then(() => next())
          .catch((err) => console.log(err.message));
      }
    });
  } else console.log('usercontroller.createuser error - no data recieved');
  // next();
};

//USER VERIFICATION - STANDARD (no OAuth)
//success - next()
//fail - sends res.data message obj, return out

userController.verifyLogin = (req, res, next) => {
  //find by username
  User.findOne({ email: req.body.email })
    .then((user) => {
      //if none found, return error
      if (!user) return res.send({ message: 'user not found' });
      //if user found, compare passwords
      else {
        bcrypt.compare(req.body.password, user.password, (error, match) => {
          //handle weird errors
          if (error) res.status(500).json(error);
          //login success
          else if (match) {
            next();
          }
          //login fail (incorrect pw)
          else return res.send({ message: 'incorrect PW' });
          //what happens here???
        });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

module.exports = userController;
