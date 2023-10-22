// Auth Middleware (Checks If The Session Is Valid And If The User Is Authenticated).
export const isAuthenticated = (req, res, next) => {
    // Access session data using req.session.
    const userId = req.session.userId;
    // Implement your authentication logic.
    if(userId){
        next();
    }
    else{
        res.status(401).send({ Error : "Unauthorized !!!"});
    }
};