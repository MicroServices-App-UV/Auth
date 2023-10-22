const GoogleStategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const GoogleUser = require('../models/GoogleUser')
const User = require('../models/User')

module.exports = function(passport){
    passport.use(new GoogleStategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback'
        }, async(accessToken, refreshToken, profile, done)=>{
            const newGoogleUser ={
                googleId: profile.id,
                displayName: profile.displayName,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                image: profile.photos[0].value
            }
            const newUser={
                username: profile.displayName,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                image: profile.photos[0].value,
                email: profile.emails[0].value
            }
            try {
                let googleUser = await GoogleUser.findOne({googleId: profile.id})
                if(googleUser){
                    done(null, googleUser)
                }else{
                    googleUser = await GoogleUser.create(newGoogleUser)
                    console.log(newUser)
                    user = await User.create(newUser)
                    done(null,googleUser)
                }
                
            } catch (err) {
                console.error(err)
            }
        }
        )
    )
    passport.serializeUser((googleUser, done) => done(null, googleUser.id)
    )

    passport.deserializeUser(async(id, done) => {
        try {
            const googleUser = await GoogleUser.findById(id)
            done(null, googleUser)
        } catch (error) {
            done(error, null)
        }
    })
}
