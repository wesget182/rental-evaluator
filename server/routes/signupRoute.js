const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');
//note - signup is all lowercase

/*
FLOW:

createUser - creates user in DB
  if success - hits callback and sends 209 & res.data.success = true
  if fail - means there is a duplicate - sends res.data.success = false

*/
router.post(
  '/',
  [userController.createUser, cookieController.setSSIDCookie, sessionController.startSession],
  (req, res) => {
    return res.status(209).send({ success: true });
  }
);

module.exports = router;
