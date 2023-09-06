// Importing Necessary Dependencies and Files.
import User from '../server/App/Models/userAuth.js';
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

// Environment Variables.
dotenv.config();

// Configuring Google OAuth 2.0 Strategy.
// -----Specifying ClientID , Client Secret Key , Callback URL.-----
passport.use(
    new GoogleStrategy(
        {
            clientID : process.env.GOOGLE_CLIENT_ID , // Getting The Cient ID From Environment Variable
            clientSecret : process.env.GOOGLE_CLIENT_SECRET , // Getting the Client Secret From Environment Variable
            callbackURL : process.env.GOOGLE_CALLBACK_URL // Getting the Callback URL From Environment Variable
        },
        (accessToken , refreshToken , profile , done) => {
            // Implementing Callback Logic
            // -----Receiving Google Profile Data.-----
            const userName = profile.displayName;
            console.log(userName);
            const userEmail = profile.emails[0].value;
            console.log(userEmail);
            const userImageUrl = profile.photos[0].value;
            console.log(userImageUrl);
            // -----Checking If The User Already Exists.-----
            User.findOne({email : userEmail})
                .then((foundUser) => {
                    // If User Already Exist.
                    if(foundUser){
                        console.log("User Already Exist !!!");
                    }
                    // If User Doesnt Exist.
                    else{
                        // Creating New Instance To The Database.
                        const newUserFromGoogle = new User({userName , userEmail});
                        // -----Store Access Tokens and Refresh Tokens.-----
                        newUserFromGoogle.googleAccessToken = accessToken;
                        newUserFromGoogle.googleRefreshToken = refreshToken;
                        // Saving The New User Instanse To The Database.
                        newUserFromGoogle.save()
                            .then(() => {
                                // -----Handle Authentication Success.-----
                                const token = generateToken(newUserFromGoogle._id);
                                done(null , newUserFromGoogle , {token});
                                console.log("New User Created Successfully ...");
                            })
                            .catch((error) => {
                                // -----Handle Authentication Failure.-----
                                console.log("Error Creating A New User !!!" , error);
                                done(new Error("Authentication Failed , User Not Found !!!"));
                            })
                    }
                })
                .catch((error) => {
                    console.log("Database Querry Error :- " , error);
                })
        }
    )
)
