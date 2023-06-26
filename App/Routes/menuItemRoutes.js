// Importing all the Dependencies and Modules.

// Defining Restaurants Routes.
app.get('/restaurants/:restaurantId/menu' , (req, res) =>{
    res.send("Getting all Menu Items for a specific Restaurant....");
})
app.get('/restaurants/:restaurantId/menu/:id' , (req, res) =>{
    res.send("Getting a specific Menu Item by ID for a Restaurant....");
})
app.post('/restaurants/:restaurantId/menu' , (req, res) => {
    res.send("Creating a new Menu Item for a Restaurant....");
})
app.put('/restaurants/:restaurantId/menu/:id' , (req, res) => {
    res.send("Updating an existing Menu Item for a Restaurant....");
})
app.delete('/restaurants/:restaurantId/menu/:id' , (req, res) => {
    res.send("Deleting a Menu Item by ID for a Restaurant....");
})

// Exporting all the Dependencies and Modules.
