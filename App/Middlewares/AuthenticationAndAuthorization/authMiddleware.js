import jwt from 'jsonwebtoken';
// Auth Middleware (Checks If The Session Is Valid And If The User Is Authenticated).
export const isAuthenticated = (req, res, next) => {
    const decode_jwt_token = jwt.verify(req.headers.authorization , process.env.JWT_SECRET);
    next();
};