var express = require('express');
var app = express();

var customCORS = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Content-Type', 'application/json');
  
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};

app.use(customCORS);
app.use(express.json());

const fakeDB =[
  {id:1, name:'admin1', pass:'123'},
  {id:2, name:'admin2', pass:'123'}
];

const getUserByName = (name) => {
  //fake bd request
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const user = fakeDB.find((user) => {
        return user.name === name;
      });
      resolve(user);
      
    }, 500)
  })
};

app.get('/', function (req, res) {
  res.send('Auth server');
});

app.post('/api/login', function (req, res) {
  
  getUserByName(req.body.username).then(user => {
    if (!user) {
      res.status(403);
    }
    res.json(user);
  });
  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});