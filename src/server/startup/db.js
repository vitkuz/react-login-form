const mongoose = require('mongoose');
const winston = require('winston');

module.exports = function (app) {
  
  const files = new winston.transports.File({ filename: 'logfile.log' });
  winston.add(files);
  
  mongoose.connect('mongodb://localhost:27017/user_managment', { useNewUrlParser: true }).then(() => {
    winston.info(() => winston.info('Connected to MongoDB...'))
  })
};