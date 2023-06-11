// Importing all the Dependencies and Modules.
import express from 'express';
import mongoose from 'mongoose';

// Creating an Express App.
const app = express();

// Using Middlewares.

// Defining Database URL.
const DB_URL = 'mongodb://localhost:27017/yummmzo_db';

// Connecting to Database.
mongoose.connect(DB_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("YummmZo Connected to Database...");
    })
    .catch((error) => {
        console.log(`Error Connecting to Database :- ${error}`);
    });

// Defining User Schema.
const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required :true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minlength : 6,
        maxlength : 10
    },
    confirmPassword : {
        type : String,
        required : true,
        minlength : 6,
        maxlength : 10
    }
})

// Defining Model.
const User = mongoose.model('User', userSchema);

// Defining Port.
const port = 81;

// Defining Routes.
app.get('/', (req, res) => {
    res.send('Welcome Users 🙏🏻');
});

// Defining Authentication Routes.
app.post('/api/register', (req, res) => {
    res.send('User Registration');
});
app.post('/api/login', (req, res) => {
    res.send('User Login');
});
app.post('/api/logout', (req, res) => {
    res.send('User Logout');
});

// Listening on Port.
app.listen(port, () => {
    console.log(`YummmZo listening on port ${port}`);
});