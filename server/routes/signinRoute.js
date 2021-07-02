const express = require('express');
const userController = require('../controllers/userController')
const sessionController = require('../controllers/sessionController')
const cookieController = require('../controllers/cookieController')
const router = express.Router();

/*
FLOW:

VERIFY LOGIN - check un/pw against database
  if good - next()
  if bad - returns 403 and 'bad login' text

SET SSID COOKIE - sets ssid cookie, then next()

START SESSION - stores ssid cookie in DB, then next()

CALLBACK - sends 209 and obj {isLoggedIn: True}
*/

router.post(
  '/',
  [userController.verifyLogin, cookieController.setSSIDCookie, sessionController.startSession],
  (req, res) => {
    return res.status(209).send({isLoggedIn: true});
    //res.redirect('/');
  }
);

module.exports = router;