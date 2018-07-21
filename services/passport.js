const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys');

passport.use(new googleStrategy({
    clientID:keys.clientId,
    clientSecret:keys.clientSecret,
    callbackURL:'/auth/google/callback'
},(access_token,refresh_token,profile,done) => {
    console.log('access_token:',access_token);
    console.log('refresh_token:',refresh_token);
    console.log('profile',profile);
}));