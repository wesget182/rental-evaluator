/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
  address1: String,
  address2: String,
  city: String,
  state: String,
  zip: String,
  email: String,
  purchasePrice: Number,
  downPayment: Number,
  interestRate: Number,
  monthlyExpenses: Number,
  purchaseDate: String,
  term: Number,
  tenants: Array,
});

const NewProperty = mongoose.model('newProperty', propertySchema);

module.exports = { NewProperty };
