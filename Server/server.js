// Importing all the Dependencies and Modules.
import express from 'express';
import dbConnection from '../Config/dbConnection.js'
import User from '../App/Models/userAuth.js';
import Cuisine from '../App/Models/cuisineSchema.js';
import Restaurant from '../App/Models/restaurantSchema.js';
import MenuItem from '../App/Models/menuItemSchema.js';
import bcrypt from 'bcrypt';


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
app.post('/api/users/register', (req, res) => {
    // Checking For Required Feilds.
    const { firstName , lastName , email , password , confirmPassword } = req.body;
    // Validating Input Feilds.
    if ( !firstName || !lastName || !email || !password || !confirmPassword ){
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
                    // Creating New Instance To The Database.
                    const newUser = new User({ firstName , lastName , email , password , confirmPassword });
                    // Saving The User Instance To The Database.
                    newUser.save()
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