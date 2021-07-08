const express = require('express');
const router = express.Router();

const middlewares = require('../controllers/properties');

// handler for submitted form with a single address or area search
router.all(
  '/',
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
        location: target['Zip code'],
        status_type: 'ForRent',
        home_type: target['Type'],
        bedsMin: target['# bedrooms'],
        bedsMax: target['# bedrooms'],
        bathsMin: target['# bathrooms'],
        bathsMax: target['# bathrooms'],
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
router.post(
  '/target',
  (req, res, next) => {
    res.locals.targetForSale = {
      features: [
        {
          properties: {
            Price: req.query.Price,
            ZPID: req.query.ZPID,
          },
        },
      ],
    };
    Object.assign(req.params, {
      location: req.query.location.slice(-5),
      status_type: 'ForRent',
      home_type: req.query.home_type,
      bedsMin: req.query.beds,
      bedsMax: req.query.beds,
      bathsMin: req.query.baths,
      bathsMax: req.query.baths,
    });
    middlewares.getPropertiesForRental(req, res, next);
  },
  (req, res) => {
    console.log('Response of target endpoint:');
    console.log(JSON.stringify(res.locals, null, 2));
    return res.status(200).json(res.locals);
  }
);

module.exports = router;
