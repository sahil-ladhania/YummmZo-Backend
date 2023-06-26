// Importing all the Dependencies and Modules.

// Defining Restaurants Routes.
app.get('/restaurants' , (req, res) =>{
    res.send("Getting all Restaurants...");
})
app.get('/restaurants/:id' , (req, res) =>{
    res.send("Getting a specific Restaurant By ID...");
})
app.get('restaurants/cuisine/:cuisineId' , (req, res) => {
    res.send("Getting Restaurants By Cuisine ID...");
})
app.post('/restaurants' , (req, res) => {
    res.send("Creating a new Restaurant...");
})
app.put('/restaurants/:id' , (req, res) => {
    res.send("Updating a existing Restaurant By ID...");
})
app.delete('/restaurants/:id' , (req, res) => {
    res.send("Deleting a Restaurant By ID...");
})

// Exporting all the Dependencies and Modules.
