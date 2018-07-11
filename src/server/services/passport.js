const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  })
});

passport.use(new GoogleStrategy({
      clientID: '268035414550-g2tok3tlm5m0pffsj1b70rqkrnvfkkhq.apps.googleusercontent.com', // todo: do not commit this till extracting
      clientSecret: '6gF7pzaDpvvQSAQH_k-1kUQ5' , // todo: do not commit this till extracting
      callbackURL: "/auth/google/callback"
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