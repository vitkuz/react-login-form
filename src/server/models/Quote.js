const mongoose = require('mongoose');
const { Schema } = mongoose;

const Schema = new Schema({
  title: String,
});

const User = mongoose.model('Quote', Schema);

module.exports = User;