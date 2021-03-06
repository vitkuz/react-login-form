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

const config = require('../../../config/dev');

passport.use(new GoogleStrategy(config,
    async function(accessToken, refreshToken, profile, done) {
  
      console.log(profile.id);
      
      try {
        const user = await User.findOne({ googleId: profile.id });
        
        if (!user) {
          const user = await User.create({ googleId: profile.id });
        }
        
        return done(null, user);
        
      } catch(err) {
        return done(err, null);
      }
  
      
      
      // User.findOne({ googleId: profile.id }, function (err, user) {
      //   if(user) {
      //     console.log('User found!');
      //     return done(err, user);
      //   } else {
      //     User.create({ googleId: profile.id }, function (err, user) {
      //       return done(err, user);
      //     });
      //   }
      // });
      
    }
));