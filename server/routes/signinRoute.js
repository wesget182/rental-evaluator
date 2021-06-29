const express = require('express');
const userController = require('../controllers/userController')
const sessionController = require('../controllers/sessionController')
const router = express.Router();

router.post(
  '/',
  [userController.verifyLogin, userController.setSSIDCookie, sessionController.startSession],
  (req, res) => {
    return res.status(209).send('signinRoute success');
  }
);

module.exports = router;