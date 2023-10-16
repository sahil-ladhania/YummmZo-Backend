// Importing Necessary Dependencies and Files.
import User from '../Models/userSchema.js';

// Controller Functions to handle a specific API Endpoint.
// -----For User Registration.-----
export const registerUser = (req, res) => {
    // Step 2: Request Validation
    // Validate the data received from the registration form.

    // If validation is successful, proceed to the next step.

    // Step 3: Password Hashing
    // Hash the user's password using 'bcrypt' for security.

    // Hashing successful, proceed to the next step.

    // Step 4: Create a User Document
    // Create a new user document based on the validated and hashed registration data.

    // Document creation successful, proceed to the next step.

    // Step 5: Save to the Database
    // Save the newly created user document to the MongoDB database.

    // User saved, proceed to the next step.

    // Step 6: Set a Session Cookie
    // Use 'res.cookie' to set a session cookie in the response.

    // Cookie set, proceed to the final step.

    // Step 7: Send a Response
    // Send an appropriate response back to the client.
}

// -----For User Login.-----
export const loginUser = (req, res) => {
    // Step 2: Request Validation
    // Validate the data received from the login form.

    // If validation is successful, proceed to the next step.

    // Step 3: Find the User
    // Find the user in your database by their email.

    // If the user is found, proceed to the next step.

    // Step 4: Password Comparison
    // Compare the provided password with the hashed password stored in the database.

    // If the password is correct, proceed to the next step.

    // Step 5: Set a Session Cookie
    // Use 'res.cookie' to set a session cookie in the response.

    // Cookie set, proceed to the final step.

    // Step 6: Send a Response
    // Send an appropriate response back to the client.
}
