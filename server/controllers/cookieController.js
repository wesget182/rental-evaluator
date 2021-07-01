const User = require("../models/userModel");
const cookieController = {};

/**
 * setCookie - set a cookie with a random number
 * currently not used
 */
cookieController.setCookie = (req, res, next) => {
  const num = Math.floor(Math.random() * 99);
  res.locals.cookie = num;
  res.cookie("secret", num, {httpOnly: true})
  .then(()=>next())
};

//finds user, sets ssid cookie

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
