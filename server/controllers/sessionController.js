//const session = require('express-session');
const Session = require('../models/sessionModel');
const mongoose = require('mongoose');

const sessionController = {};

//creates cookie, stores SSID in mongo

sessionController.startSession = (req, res, next) => {
  const ssidCookie = res.locals.cookie;
  Session.create({
    cookieId: ssidCookie,
  });
  next();
};

//finds cookie
//on success - next()
//on fail, sends obj with isloggedin: false

sessionController.isLoggedIn = (req, res, next) => {
  const ssidCookie = req.cookies.ssid;
  //find the cookie
  Session.findOne({
    cookieId: ssidCookie,
  }).then((data) => {
    //if not logged in, return false object (USE THIS FOR REDIRECT)
    if (!data) {
      return res.status(500).send({ isLoggedIn: false });
    }
    //else, you are logged in, go next
    else {
      next();
    }
  });
};

module.exports = sessionController;
