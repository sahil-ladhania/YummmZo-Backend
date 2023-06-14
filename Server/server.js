// Importing all the Dependencies and Modules.
import express from 'express';
import dbConnection from '../Config/dbConnection.js'
import User from '../App/Models/userAuth.js';
import bcrypt from 'bcrypt'; 
import dotenv from 'dotenv';
dotenv.config();


// Creating an Express App.
const app = express();

// Defining Port.
const port = 81;

// Adding Middlewares.
app.use(express.json());

// Conecting to Database.
dbConnection();

// Defining Routes.
app.get('/', (req, res) => {
    res.send('Welcome Users 🙏🏻');
});

// Defining Authentication Routes.
// API for User Registration.
app.post('/api/register', (req, res) => {
    // -----Retrieving Values Subbmitted By User-----
    const { firstName , lastName ,email , password , confirmPassword } = req.body;
    // Validation Part.

    // -----Checking if all the required Data Feilds are Filled or Not-----
    if ( !firstName || !lastName || !email || !password || !confirmPassword ){
        return res.status(400).json({Error : "Please Fill The Required Feilds !!!"});
    }

    // -----Checking if the Email Address is Unique or Not-----
    User.findOne({ email : email })
        .then((userExist) => {
            if ( userExist ){
                return res.status(400).json({Error : "Email Already Exist !!!"});
            }
            // -----Checking if the Password is same as Confirm Password or Not-----
            else if( password != confirmPassword ){
                return res.status(201).json({Error : "Passwords Do Not Match !!!"});
            }
            else{
                const user = new User({ firstName , lastName , email , password , confirmPassword }); // Created a new instance of User model or class.
                // Middleware Used to Hash Password.
                user.save()
                    .then(() => {
                        return res.status(201).json({Message : "User Successfully Registered ..."});
                    })
                    .catch((error) => {
                        return res.status(500).json({Error : error});
                    });
            };
        });
});

// API for User Login.
app.post('/api/login', (req, res) => {
    // -----Retrieving Values Subbmitted By User-----
    const { email , password } = req.body;

    // Validation Part.
    // -----Checking if all the required Data Feilds are Filled or Not-----
    if ( !email || !password){
        return res.status(400).json({Error : "Please Fill The Required Feilds !!!"});
    }
    // -----Checking if the Email Address in the Database Exist or Not-----
    User.findOne({ email : email })
        .then((user) => {
            console.log(user);
            if (user){
                // -----Comparing The Password-----
                bcrypt
                .compare(password , user.password)
                    .then((isMatch) => {
                        if (isMatch){
                            // Authentication Part Using JWT.
                            user
                                .generateAuthToken()
                                .then((token) => {
                                    console.log(token);
                                    // -----Storing JWT Token in Cookie-----
                                    res.cookie( "jwtoken" , token , {
                                        // -----Defining Session Time-----
                                        expires : new Date(Date.now() + 25892000000),
                                        httpOnly : true
                                    });
                                    res.json({ Message: "User Login Successfull..." });
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        }
                        else{
                            res.status(400).json({Error : "Invalid Credentials !!!"});
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                }
                else{
                    res.status(400).json({ error: "Invalid Credentials !!!" });
                }
            })
            .catch((error) => {
                console.log(error);
            })
});

// API for User Logout.
app.post('/api/logout', (req, res) => {
    res.send('User Logout');
});

// Listening on Port.
app.listen(port, () => {
    console.log(`YummmZo listening on port ${port}...`);
});