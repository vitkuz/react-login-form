const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('../models/User');
const config = require('../../../config/keys');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  })
});



passport.use(new GoogleStrategy( {
    clientID: config.clientID, // todo: do not commit this till extracting
    clientSecret: config.clientSecret , // todo: do not commit this till extracting
    callbackURL: config.callbackURL,
  },
    async function(accessToken, refreshToken, profile, done) {
  
      console.log(profile.id);
      
      User.findOne({ googleId: profile.id }, function (err, user) {
        if(user) {
          console.log('User found!');
          return done(err, user);
        } else {
          User.create({ googleId: profile.id }, function (err, user) {
            return done(err, user);
          });
        }
      });
      
    }
));