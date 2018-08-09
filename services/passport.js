const mongoose = require('mongoose');

const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user,done)=>{
    done(null,user.id)
});
passport.deserializeUser((id,done) => {
    User.findById(id).then(user => {
        done(null,user);
    });
});

passport.use(new googleStrategy({
    clientID:keys.clientId,
    clientSecret:keys.clientSecret,
    callbackURL:'/auth/google/callback'
},(access_token,refresh_token,profile,done) => {
    User.findOne({googleId:profile.id})
    .then((existingUser)=>{
        if(existingUser){
            done(null,existingUser);
        }else{
            new User({googleId:profile.id})
            .save()
            .then(user => done(null,user));
        }
    })
}));