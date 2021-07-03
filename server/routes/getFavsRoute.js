const express = require('express');
const favsController = require('../controllers/favsController');
const router = express.Router();

router.post('/', [favsController.getFavs], (req, res) => {
  console.log('RES LOCALS GET FAVS', res.locals.favsArr);
  return res.status(209).send({ favsArr: res.locals.favsArr });
});

module.exports = router;
