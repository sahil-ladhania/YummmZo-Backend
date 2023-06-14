// Importing all the Dependencies and Modules.
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
    },
    tokens : [
        {
            token : {
                type : String,
                required : true
            }
        }
    ]
});

// Hashing The Password.
userSchema.pre('save', function (next) {
    console.log("Hashing middleware is being called...");
    if (this.isModified('password')) {
        bcrypt.hash(this.password, 12)
        .then(hashedPassword => {
            this.password = hashedPassword;
            next();
        })
        .catch(error => {
            next(error);
        });
    }
    if (this.isModified('confirmPassword')) {
        bcrypt.hash(this.confirmPassword, 12)
        .then(hashedConfirmPassword => {
            this.confirmPassword = hashedConfirmPassword;
            next();
        })
        .catch(error => {
            next(error);
        });
    } else {
        next();
    }
});

// Generating Tokens.
userSchema.methods.generateAuthToken = function () {
    const user = this;
    return new Promise((resolve, reject) => {
        jwt.sign({ _id: user._id }, process.env.SECRET_KEY, (error, token) => {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            user.tokens = user.tokens.concat({ token });
            user.save()
            .then(() => resolve(token))
            .catch((error) => {
                console.log(error);
                reject(error);
            });
        }
        });
    });
};


// Defining User Model.
const User = mongoose.model('User', userSchema);

// Exporting all the Dependencies and Modules.
export default User