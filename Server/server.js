// Importing all the Dependencies and Modules.
import express from 'express';

// Creating an Express App.
const app = express();

// Defining Port.
const port = 81;

// Defining Routes.
app.get('/', (req, res) => {
    res.send('Welcome Users 🙏🏻');
});

// Listening on Port.
app.listen(port, () => {
    console.log(`YummmZo listening on port ${port}`);
});