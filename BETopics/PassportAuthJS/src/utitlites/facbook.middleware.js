import * as FacebookStrategy from 'passport-facebook';
import passport from 'passport';

passport.serializeUser((user,done) => {
    console.log(user);
    done(null,user)
})

passport.deserializeUser((user,done) => {
    console.log(user);
    done(null,user)
})


export default passport.use(new FacebookStrategy.Strategy({
    clientID:"686576586977386",
    clientSecret:"514bb5ef28935c99b3c36ce6dc50a337",
    callbackURL: "http://localhost:4000/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email','name','profileUrl','gender']
},function(accessToken, refreshToken, profile, cb){
    console.log(accessToken);
    console.log(refreshToken);
    
    console.log(profile);
    console.log(`CB ${cb}`);
    console.log("Inisde Middleware");
    return cb(null,profile)
}))