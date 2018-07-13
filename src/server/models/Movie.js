const mongoose = require('mongoose');
const { Schema } = mongoose;

const Schema = new Schema({
  title: String,
});

const User = mongoose.model('Movie', Schema);

module.exports = User;