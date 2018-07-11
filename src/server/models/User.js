const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String,
  email: String,
  password: String,
  bio: String,
});

// userSchema.statics.findOneOrCreate = function findOneOrCreate(condition, callback) {
//   const self = this;
//   self.findOne(condition, (err, result) => {
//     return result ? callback(err, result) : self.create(condition, (err, result) => { return callback(err, result) })
//   })
// };

const User = mongoose.model('User', userSchema);

module.exports = User;