// Importing all the Dependencies and Modules.
import mongoose from "mongoose";

// Defining Database URL.
const DB_URL = 'mongodb://localhost:27017/yummmzo_db';

// Connecting to MongoDB Database.
const dbConnection = () => {
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
}

// Exporting all the Dependencies and Modules.
export default dbConnection;