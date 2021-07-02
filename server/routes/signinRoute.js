const express = require('express');
const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');
const router = express.Router();

router.post(
  '/',
  [
    userController.verifyLogin,
    userController.setSSIDCookie,
    sessionController.startSession,
  ],
  (req, res) => {
    return res.status(200).send('signinRoute success').redirect('/');
  }
);

module.exports = router;
