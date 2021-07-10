/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const financialsSchema = new Schema({
  purchasePrice: { type: Number },
  downPayment: { type: Number },
  interestRate: { type: Number },
  monthlyExpenses: { type: Number },
  purchaseDate: { type: String },
  term: { type: Number },
});

module.exports = mongoose.model('Financials', financialsSchema);
