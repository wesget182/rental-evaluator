const express = require('express');
const router = express.Router();

const middlewares = require('../controllers/properties');

// handler for submitted form with a single address or area search
router.get('/',
  middlewares.getPropertiesForSale,
  (req, res, next) => {
    if ('zpid' in res.locals) {
      req.params.zpid = res.locals.zpid;
      middlewares.getTargetForSale(req, res, next);
    } else {
      return next();
    }
  },
  (req, res, next) => {
    if ('targetForSale' in res.locals) {
      const target = res.locals.targetForSale['features'][0]['properties'];
      Object.assign(req.params, {
        location : target['Zip code'],
        status_type: 'ForRent',
        home_type: target['Type'],
        bedsMin: target['# bedrooms'],
        bedsMax: target['# bedrooms'],
        bathsMin: target['# bathrooms'],
        bathsMax: target['# bathrooms']
      });
      middlewares.getPropertiesForRental(req, res, next);
    } else {
      return next();
    }
  },
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

// handler for a clicked address search on a property pinned on the map
router.get('/target',
  middlewares.getPropertiesForRental,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

module.exports = router;
