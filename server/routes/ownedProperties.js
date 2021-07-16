/** @format */

const express = require('express');
const router = express.Router();

const ownedPropertiesController = require('../controllers/ownedPropertiesController');

router.post(
  '/newProperty',
  ownedPropertiesController.addNewProperty,
  (req, res) => {
    console.log('res.locals in newProperty route: ', res.locals);
    res.status(200).send(res.locals);
  }
);

router.post(
  '/addTenantInfo',
  ownedPropertiesController.addTenantController,
  (req, res) => {
    res.status(200).send(res.locals);
  }
);

router.post(
  '/addFinancialInformation',
  ownedPropertiesController.addFinancialInformation,
  (req, res) => {
    console.log('res.locals in fincnail middleware', res.locals);
    res.status(200).send(res.locals);
  }
);

router.post(
  '/listProperties',
  ownedPropertiesController.getOwnedProperties,
  (req, res) => {
    console.log('res.locals in getListProps route: ', res.locals);
    res.status(200).send(res.locals);
  }
);

module.exports = router;
