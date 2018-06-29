var express = require('express');
var app = express();

// app.use();

app.get('/', function (req, res) {
  // console.log(req.body);
  // console.log(req.params);
  // console.log(req.query);
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});