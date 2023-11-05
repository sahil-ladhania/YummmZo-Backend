// Importing Necessary Dependencies and Files.
import User from '../Models/userSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Controller Functions to handle a specific API Endpoint.
// -----For User Registration.-----
export const registerUser = (req, res) => {
    // Extracting the Form Data from The Request.
    const { firstName, lastName, email, password } = req.body;
    // Validating Input Fields.
    // Checking If User Has Filled The Required Details.
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).send({ Error: "Please Fill The Required Fields !!!" });
    } 
    else {
        // Password Hashing.
        const saltRounds = 10;
        bcrypt
        .hash(password, saltRounds)
            .then((hashedPassword) => {
                // Create a User Document.
                User.create({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: hashedPassword,
                })
                    .then((newUser) => {
                        // Send a Response.
                        res.status(201).send({ Success: "User Registered Successfully ..." });
                        console.log(newUser);
                    })
                    .catch((error) => {
                        res.status(500).send({Error: "Error During User Registration (Creating User) !!!" , error});
                    });
            })
            .catch((error) => {
                res.status(500).send({Error: "Error During User Registration (Hashing Password) !!!" , error});
            });
    };
};

// -----For User Login.-----
export const loginUser = (req, res) => {
    // Extracting the Form Data from The Request.
    const { email , password } = req.body;
    // Validating Input Fields.
    // Checking If User Has Filled The Required Details.
    if ( !email || !password ){
        return res.status(400).send({ Error: "Please Fill The Required Fields !!!" });
    }
    else{
        // Find the User
        User.findOne({email : email})
            .then((user) => {
                if(!user){
                    return res.status(404).send({ Error: "User Not Found !!!" });
                }
                else{
                    // Password Comparison.
                    bcrypt.compare(password , user.password)
                        .then((result) => {
                            // If Passwords Match.
                            if(result){
                                // Generate JWT Token.
                                const jwt_token = jwt.sign({_id : user._id} , process.env.JWT_SECRET , {expiresIn : "7d"});
                                console.log(`Token Generated For User : ${jwt_token}`);
                                // Send a Response.
                                res.status(200).send({ Success: "User Logged In Successfully ..." , user , jwt_token });
                            }
                            // If Passwords Dont Match.
                            else{
                                res.status(401).send({ Error: "Invalid Password !!!" });
                            }
                        })
                        .catch((error) => {
                            return res.status(500).send({ Error: "Error Comparing Passwords !!!", error });
                        })
                }
            })
            .catch((error) => {
                return res.status(500).send({ Error : "User Not Found !!!" , error});
            });
    };
};

// -----For Getting A User-----
export const getUser = (req, res) => {
    const { userId } = req.params;
    User.findById(userId)
        .then((userById) => {
            if(!userById){
                return res.status(404).send({ Error: "No Such User Exists !!!" });
            }
            else{
                return res.status(200).send(userById);
            }
        })
        .catch((error) => {
            return res.status(500).send({ Error : `Error Occured While Fetching User By ID : ${error}`});
        })
}