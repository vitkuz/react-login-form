const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String,
  email: String,
  password: String,
  bio: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;