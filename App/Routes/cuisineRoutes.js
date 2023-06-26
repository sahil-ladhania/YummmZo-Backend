// Importing all the Dependencies and Modules.

// Defining Cuisines Routes.
app.get('/cuisines' , (req, res) => {
    res.send("Getting all Cuisines...");
})
app.get('/cuisines/:id' , (req, res) => {
    res.send("Getting a specific Cuisine By ID...");
})
app.post('/cuisines' , (req, res) => {
    res.send("Creating a New Cuisine...");
})
app.put('/cuisines/:id' , (req, res) => {
    res.send("Updating an Exisiting Cuisine By ID...");
})
app.delete('/cuisines/:id' , (req, res) => {
    res.send("Deleting a Cuisine By ID...");
})

// Exporting all the Dependencies and Modules.
