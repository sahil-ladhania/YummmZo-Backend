// Importing all the Dependencies and Modules.


// Connecting to MongoDB Database.
mongoose.connect(DB_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("YummmZo Connected to Database...");
    })
    .catch((error) => {
        console.log(`Error Connecting to Database :- ${error}`);
    });

// Exporting all the Dependencies and Modules.