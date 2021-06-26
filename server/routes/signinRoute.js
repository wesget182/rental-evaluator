const express = require('express');
const userController = require('../controllers/userController')
const router = express.Router();

//note - signup is all lowercase
router.post(
  '/',
  [userController.verifyLogin],
  (req, res) => {
    return res.status(209).send('signinRoute success');
  }
);

module.exports = router;