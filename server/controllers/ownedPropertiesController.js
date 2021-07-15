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

ownedPropertiesController.addTenantController = async (req, res, next) => {
  console.log('req.body in addTenantController', req.body);
  const { params } = req.body;

  try {
    const tenantInfo = params.body;
    const property = await models.NewProperty.findOne({ _id: params._id });
    property.tenants = [...property.tenants, tenantInfo];
    property.save();
    res.locals.tenantInfo = property.tenants;
    return next();
  } catch (err) {
    return next(err);
  }
};

ownedPropertiesController.addFinancialInformaion = async (req, res, next) => {
  const { params } = req.body;

  const financialInfo = params.body;
  financialInfo['_id'] = params._id;

  await models.Financials.create(financialInfo)
    .then((data) => {
      res.locals.financialInfo = data;
      return next();
    })
    .catch((err) => next(err));
};

ownedPropertiesController.getOwnedProperties = async (req, res, next) => {
  console.log('req.body in getOwnerProp', req.body);
  await models.NewProperty.find({ email: req.body.body.email }).then((data) => {
    res.locals.ownedProps = data;
  });

  // await models.Tenants.find({ email: req.body.body._id }).then((data) => {
  //   res.locals.tenantInfo = data;
  // });
  // await models.Financials.find({ email: req.body.body._id }).then((data) => {
  //   res.locals.financialInfo = data;
  // });
  return next();
};

module.exports = ownedPropertiesController;
