const express = require('express');
const userController = require('../controllers/userController')
const router = express.Router();

//note - signup is all lowercase
router.post(
  '/',
  [userController.createUser],
  (req, res) => {
    return res.status(209).send('signupRoute success');
  }
);

module.exports = router;