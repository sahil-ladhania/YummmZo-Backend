// Importing all the Dependencies and Modules.


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

// Exporting all the Dependencies and Modules.
