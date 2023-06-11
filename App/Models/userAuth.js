// Importing all the Dependencies and Modules.


// Defining User Schema.
const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required :true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minlength : 6,
        maxlength : 10
    },
    confirmPassword : {
        type : String,
        required : true,
        minlength : 6,
        maxlength : 10
    }
});

