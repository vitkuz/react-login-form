const mongoose = require('mongoose');
const { Schema } = mongoose;

const Schema = new Schema({
  title: String,
});

const User = mongoose.model('Tool', Schema);

module.exports = User;