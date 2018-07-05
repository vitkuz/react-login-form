const express = require('express');
const app = express();

require('./startup/logging');
require('./startup/routes')(app);
require('./startup/db')();

// const p = Promise.reject(new Error('Promise was rejected'));
// p.then((result) => console.log('DONE'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});