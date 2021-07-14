/** @format */

const { Mongoose } = require('mongoose');
const fetch = require('node-fetch');
const { URL, URLSearchParams } = require('url');
const { quantileSorted } = require('d3');
const models = require('../models/propertyModel');
require('dotenv').config();

const ownedPropertiesController = {};

ownedPropertiesController.addNewProperty = async (req, res, next) => {
  console.log('req.body in addnewprop', req.body);
  const { params } = req.body;

  // console.log('email in newProp', email);

  const propertyInfo = params.body;
  propertyInfo['email'] = params.email;
  console.log('Property Info: ', propertyInfo);

  await models.NewProperty.create(propertyInfo)
    .then((data) => {
      res.locals.property = data;
      return next();
    })
    .catch((err) => console.log(err));

  return next();
};

ownedPropertiesController.getOwnedProperties = async (req, res, next) => {
  console.log('req.body in getOwnerProp', req.body);
  await models.NewProperty.find({ email: req.body.body.email }).then((data) => {
    res.locals.ownedProps = data;
    console.log('owndedProps', res.locals.ownedProps);
  });
  return next();
};

module.exports = ownedPropertiesController;
