const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//TODO - ADD BCRYPT

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  favorites: { type: Array },
});

module.exports = mongoose.model('User', userSchema);
