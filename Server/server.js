// Importing all the Dependencies and Modules.
import express from 'express';
import dbConnection from '../Config/dbConnection.js'
import User from '../App/Models/userAuth.js';

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
                return res.status(201).json({Error : "Email Already Exist !!!"});
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
    res.send('User Login');
});



// API for User Logout.
app.post('/api/logout', (req, res) => {
    res.send('User Logout');
});

// Listening on Port.
app.listen(port, () => {
    console.log(`YummmZo listening on port ${port}...`);
});