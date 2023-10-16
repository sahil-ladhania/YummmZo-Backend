// Importing Necessary Dependencies and Files.
import User from '../Models/userSchema.js';
import bcrypt from 'bcrypt';

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
                // Set a Session Cookie.
                req.session.userId = newUser._id;
                // Send a Response.
                res.status(201).send({ Success: "User Registered Successfully ..." });
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
                                // Set a Session Cookie.
                                req.session.userId = user._id;
                                // Send a Response.
                                res.status(200).send({ Success: "User Logged In Successfully ..." });
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
