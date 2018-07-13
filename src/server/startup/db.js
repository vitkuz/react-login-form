const mongoose = require('mongoose');
const winston = require('winston');
const config = require('../../../config/keys');

module.exports = function (app) {
  
  const files = new winston.transports.File({ filename: 'logfile.log' });
  winston.add(files);
  
  mongoose.connect(config.mongodb, { useNewUrlParser: true }).then(() => {
    winston.info(() => winston.info('Connected to MongoDB...'))
  })
};