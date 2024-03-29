import z from 'zod';

// Defining Search Schema
export const searchSchema = z.string().min(3).max(30).trim();

// Defining Middleware for Validating Search
export const validateSearch = (req , res , next) => {
    searchSchema.parseAsync(req.params.query)
        .then((validatedQuery) => {
            console.log(validatedQuery);
            req.searchQuery = validatedQuery;
            next();
        })
        .catch((error) => {
            res.status(500).json({
                "Error" : `Invalid Search Query : ${error}!!!`
            })
        })
}