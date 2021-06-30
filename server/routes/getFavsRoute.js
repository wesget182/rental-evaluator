const express = require('express');
const favsController = require('../controllers/favsController')
const router = express.Router();

router.post(
  '/',
  [favsController.getFavs],
  (req, res) => {
    return res.status(209).send({favsArr: res.locals.favsArr});
  }
);

module.exports = router;