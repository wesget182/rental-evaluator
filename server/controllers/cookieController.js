const User = require("../models/userModel");
const cookieController = {};

/**
 * setCookie - set a cookie with a random number
 */
cookieController.setCookie = (req, res, next) => {
  res.cookie("secret", Math.floor(Math.random() * 99));
  return next();
};

//set ssid cookie - for login verification
cookieController.setSSIDCookie = (req, res, next) => {
  User.findOne({email: req.body.email})
  .then((data) => {
    const id = data.id;
    res.locals.cookie = id;
    res.cookie("ssid", id, {httpOnly: true});
  })
  .then(() => next())
}

module.exports = cookieController;
