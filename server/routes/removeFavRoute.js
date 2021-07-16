const express = require('express');
const favsController = require('../controllers/favsController');
const router = express.Router();

router.post('/', [favsController.removeFav], (req, res) => {
  return res.status(209).send(res.locals.favorites);
});

module.exports = router;