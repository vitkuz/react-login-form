const express = require('express');
const passport = require('passport');
const passportConfig = require('../services/passport');
const session = require('express-session');
const cookieSession = require('cookie-session');
const helmet = require('helmet');
const compression = require('compression');
const errorHandler = require('../middleware/errorHandler');
const asyncMiddleware = require('../middleware/asyncMiddleware');
const customCORS = require('../middleware/customCORS');
// const FileStore = require('session-file-store')(session);

module.exports = function (app) {
  
  app.use(helmet());
  app.use(compression());
  app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ['fdsfdsfdskjlkjfdslkjfdslkjfdskjfjjfj'] //todo: do not commit this
  }));
  app.use(customCORS);
  app.use(express.json());
  
  app.use(passport.initialize()); // todo: why we need that?
  app.use(passport.session()); // todo: why we need that?
  
  // app.use(session({
  //   name: 'server-session-cookie-id',
  //   secret: 'my express secret',
  //   saveUninitialized: true,
  //   resave: true,
  //   // store: new FileStore()
  // }));
  
  app.use((req, res, next) => {
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
  
  app.get('/', function (req, res, next) {
    
    try {
      throw new Error('Throw error on purpose');
      
      if (typeof req.session.views === 'undefined') {
        req.session.views = 0;
      }
      req.session.views++;
      
      
    } catch (error) {
      next(error);
    }
    
    res.end('Welcome to the file session demo. Refresh page!' +  req.session.views);
    
  });
  
  app.post('/api/login', asyncMiddleware(async (req, res) => {
    
    const user = await getUserByName(req.body.username);
    
    res.json(user);
    
  }));
  
  // auth routes
  
  app.get('/login', (req,res) => {
    console.log('Done');
    res.send('Cool')
  });
  
  app.get('/api/logout', (req,res) => {
    req.logout();
  });
  
  app.get('/api/me', (req,res) => {
    res.send(req.user);
  });
  
  app.get('/auth/google',
      passport.authenticate('google', { scope: ['profile'] }));
  
  app.get('/auth/google/callback',
      passport.authenticate('google', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });
  
  app.use(errorHandler);
  
};