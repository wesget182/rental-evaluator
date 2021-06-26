//const session = require('express-session');
const Session = require('../models/sessionModel')
const mongoose = require('mongoose');

const sessionController = {};

/*
TODO:
*/

sessionController.startSession = (req, res, next) => {
  console.log('res.locals.cookie: ', res.locals.cookie)
  const ssidCookie = res.locals.cookie;
  Session.create({
    cookieId: ssidCookie
  })
  next();
};

sessionController.isLoggedIn = (req, res, next) => {
  const ssidCookie = req.cookies.ssid;
  Session.findOne({
    cookieId: ssidCookie
  })
  .then((data) => {
    if (!data) {
      return res.status(500).send('ssid cookie not found')
    } else {
      console.log(data);
      next();
    }
  })
};

module.exports = sessionController;





