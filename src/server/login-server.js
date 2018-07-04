const express = require('express');
const session = require('express-session');
// var FileStore = require('session-file-store')(session);
const app = express();


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

app.use(session({
  name: 'server-session-cookie-id',
  secret: 'my express secret',
  saveUninitialized: true,
  resave: true,
  // store: new FileStore()
}));

app.use(customCORS);
app.use(express.json());

app.use((req, res, next) => {
  // console.log('req.session', req.session);
  return next();
});

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
  
  if (typeof req.session.views === 'undefined') {
    req.session.views = 0;
  }
  req.session.views++;
  
  res.end('Welcome to the file session demo. Refresh page!' +  req.session.views);
});

app.post('/api/login', function (req, res) {
  
  console.log(req.body);
  
  getUserByName(req.body.username).then(user => {
    if (!user) {
      res.sendStatus(403);
    }
    res.json(user);
  });
  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});