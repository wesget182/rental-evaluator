/** @format */

const express = require('express');
const router = express.Router();

const ownedPropertiesController = require('../controllers/ownedPropertiesController');

router.post('/newProperty', ownedPropertiesController.addNewProperty, (req, res) => {
  res.status(200).send(res.locals);
});

router.post('/addTenantInfo', ownedPropertiesController.addTenantController, (req, res) => {
  res.status(200).send(res.locals);
});

router.post(
  '/addFinancialInformation',
  ownedPropertiesController.addFinancialInformation,
  (req, res) => {
    res.status(200).send(res.locals);
  }
);

router.post('/listProperties', ownedPropertiesController.getOwnedProperties, (req, res) => {
  res.status(200).send(res.locals);
});

module.exports = router;
