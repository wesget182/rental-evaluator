/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tenantSchema = new Schema({
  tenantId: { type: Number },
  tenantName: { type: String },
  tenantEmail: { type: String },
  tenantPhone: { type: String },
  monthlyRent: { type: Number },
});

module.exports = mongoose.model('Tenant', tenantSchema);
