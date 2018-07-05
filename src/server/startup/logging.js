const winston = require('winston');

module.exports = function () {
  const files = new winston.transports.File({ filename: 'logfile.log' });
  const consoleLog = new winston.transports.Console({ colorize: true, prettyPrint: true });
  winston.add(files).add(consoleLog);
  
  process.on('uncaughtException', (error) => {
    console.log('WE GOT AN UNCAUGHT EXCEPTION');
    winston.error(error.message, error);
    process.exit(1);
  });
  
  process.on('unhandledRejection', (error) => {
    console.log('WE GOT AN UNHANDLED REJECTION');
    winston.error(error.message, error);
  });
};