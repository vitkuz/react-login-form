const winston = require('winston');

module.exports =  (err, req, res, next) => {
  winston.error(err.message, err);
  console.log(err.message, err);
  res.status(500).send('Bad request');
};