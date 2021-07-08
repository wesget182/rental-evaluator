const express = require('express');
const favsController = require('../controllers/favsController');
const router = express.Router();

router.post('/', [favsController.addFavs], (req, res) => {
  return res.status(209).send('addFavs route success');
});

module.exports = router;
