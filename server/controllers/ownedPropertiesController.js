/** @format */

const models = require('../models/propertyModel');
require('dotenv').config();

const ownedPropertiesController = {};

ownedPropertiesController.addNewProperty = async (req, res, next) => {
  const { params } = req.body;
  const propertyInfo = params.body;
  propertyInfo['email'] = params.email;

  await models.NewProperty.create(propertyInfo)
    .then((data) => {
      res.locals.property = data;
      return next();
    })
    .catch((err) => console.log(err));

  return next();
};

ownedPropertiesController.addTenantController = async (req, res, next) => {
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

ownedPropertiesController.addFinancialInformation = async (req, res, next) => {
  const { params } = req.body;
  try {
    const financialInfo = params.body;
    console.log('financialInfo', financialInfo);

    const property = await models.NewProperty.findOneAndUpdate(
      {
        _id: financialInfo._id,
      },
      {
        purchasePrice: financialInfo.purchasePrice,

        downPayment: financialInfo.downPayment,
        interestRate: financialInfo.interestRate,
        term: financialInfo['Term (Years)'],
        monthlyExpenses: financialInfo.monthlyExpenses,
      }
    );
    property.financials = financialInfo;
    property.save();
    res.locals.financials = property.financials;
    return next();
  } catch (err) {
    return next(err);
  }
};

ownedPropertiesController.getOwnedProperties = async (req, res, next) => {
  await models.NewProperty.find({ email: req.body.body.email }).then((data) => {
    res.locals.ownedProps = data;
  });
  return next();
};

module.exports = ownedPropertiesController;
