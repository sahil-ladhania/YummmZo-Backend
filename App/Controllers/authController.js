// Importing Necessary Dependencies and Files.
import User from '../Models/userAuth.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import passport from "passport";

// Controller Functions to handle a specific API Endpoint.
// -----For User Registration.-----
export const userRegister = (req,res) => {
    // Extracting the Form Data from The Request.
    const { firstName , lastName , email , password } = req.body;
    // Validating Input Feilds.
    // Checking For Required Feilds.
    if ( !firstName || !lastName || !email || !password ){
        return res.status(400).send({ Error : "Please Fill The Required Feilds !!!"});
    }
    else{
        // Checking For Existing Users.
        const { email } = req.body;
        User.findOne({ email : email })
            .then((existingUser) => {
                if(existingUser){
                    return res.status(400).send({ Error : "Email Already Registered !!!"});
                }
                else{
                    // Function For Hashing Password.
                    const generateHash = (password) => {
                        return bcrypt.genSalt(10)
                            .then((salt) => {
                                return bcrypt.hash(password , salt);
                            })
                    };
                    // Creating New Instance To The Database.
                    const newUser = new User({ firstName , lastName , email , password });
                    // Hashing The Password And Saving The User Instance To The Database.
                    generateHash(password)
                        .then((hashedPassword) => {
                            newUser.password = hashedPassword;
                            return newUser.save();
                        })
                            .then(() => {
                                return res.status(200).send({ Message : "User Successfully Registered ..."});
                            })
                            .catch((error) => {
                                return res.status(500).send({ Error : `Error Occured While Saving The User Data. ${error}`});
                            });
                    }
            })
            .catch((error) => {
                return res.status(500).send({ Error : `Error Occured While Saving The User Data. ${error}`});
            })
        }
}
// Function To Generate Tokens.
const generateToken = (userId) => {
    const token = jwt.sign({userId} , process.env.JWT_SECRET , {expiresIn : "1h"});
    return token;
}
// -----For User Login.-----
export const userLogin = (req,res) => {
    // Extracting the Form Data from The Request.
    const { email , password } = req.body;
    // Validating Input Feilds.
    // Checking For Required Feilds.
    if ( !email || !password ){
        return res.status(400).send({ Error : "Please Fill The Required Feilds !!!"});
    }
    else{
        return User.findOne({ email : email })
        .then((user) => {
            // If User Not Found.
            if(!user){
                return res.status(401).send({ Error: "Invalid Login Credentials!" });
            }
            // Comparing Passwords.
            else{
                bcrypt.compare(password , user.password)
                    .then((match) => {
                        if (match){
                            // Generate JWT Token.
                            const token = generateToken(user._id);
                            // Saving JWT Tokens.
                            user.tokens.push(token);
                            // Saving Updated User Document.
                            user.save()
                                .then(() => {
                                    return res.status(200).send({ Message : "User Logged In Successfully ..."});
                                })
                                .catch((error) => {
                                    return res.status(500).send({ Error: `Error Occurred While Saving the Token. ${error}` });
                                })
                        }
                        else{
                            return res.status(401).send({ Error : "Invalid Login Credentials !"});
                        }
                    })
                    .catch((error) => {
                        return res.status(500).send({Error : `Error Occurred While Comparing Passwords. ${error}`});
                    })
            }
        })
        .catch((error) => {
            return res.status(500).send({ Error : `Error Occured While Fetching The User Data. ${error}`});
        })
    }
}

// -----For Initiating Google Authentication.-----
export const initiateGoogleOAuth = passport.authenticate('google', { scope: ['profile'] });
// -----For Handeling Google OAuth Callback.-----
export const handleGoogleAuthCallback = (req , res) => {
    passport.authenticate('google', (err , user) => {
        if(err){
            return res.redirect('/login');
        }
        if(user){
            const {given_name , family_name , email } = user;
            const newUser = new User({
                given_name, 
                family_name, 
                email
            })
            newUser.save((err) => {
                if(err){
                    return res.redirect('/signup'); 
                }
                else{
                    return res.redirect('/home'); 
                }
            })
        }
    })(req , res);
};