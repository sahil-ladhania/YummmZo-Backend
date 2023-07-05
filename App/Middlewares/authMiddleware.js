// Importing all the Dependencies and Modules.
import jwt from 'jsonwebtoken';

// Defining Middleware for Protected Routes For Token Base.
const requireLogin = (req, res, next) => {
    // Extracting Token From Authorization Header.
    const token = req.headers.authorization;
    // Check If Token Is Present.
    if (!token){
        return res.status(401).send({ Error : "No Token Provided , Authorization Denied !!!" });
    }
    // Verify The Token Using The Same Secret Key Used During Token Generation.
    jwt.verify(token , process.env.JWT_SECRET , (err , decoded) => {
        if (err){
            return res.status(401).send({ Error: 'Invalid Token, Authorization Denied !!!' });
        }
        // If The Token Is Valid, The Payload Wll Be Available In The `decoded` Object.
        // You Can Perform Additional Checks Or Processing If Required.
        req.user = decoded;
        next();
    })
}

// Exporting all the Dependencies and Modules.
export default requireLogin;