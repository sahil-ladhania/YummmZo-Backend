// Importing Necessary Dependencies and Files.
import Cuisine from '../Models/cuisineSchema.js';

// Controller Functions to handle a specific API Endpoint.
// -----For Creating a New Cuisine.-----
export const createCuisine = (req, res) => {
    // Extracting the Form Data from The Request.
    const {imageURL , cuisineName} = req.body;
    // Validating Input Feilds.
    // Checking If User Has Filled The Required Details.
    if(!imageURL || !cuisineName){
        return res.status(400).send({ Error : "Please Fill The Required Feilds !!!"});
    }
    else{
        // Checking For Existing Restaurants.
        Cuisine.findOne({cuisineName : cuisineName})
            .then((existingCuisine) => {
                if(existingCuisine){
                    return res.status(400).send({ Error : "Cuisine Already Registered !!!"});
                }
                else{
                    // Creating New Instance To The Database.
                    const newCuisine = new Cuisine({imageURL , cuisineName});
                    newCuisine.save()
                        .then(() => {
                            return res.status(200).send({ Message : "Cuisine Successfully Registered ..."});
                        })
                        .catch((error) => {
                            return res.status(500).send({ Error : `Error Occured While Saving The Cuisine. ${error}`});
                        })
                }
            })
            .catch((error) => {
                return res.status(500).send({ Error : `Error Occured While Saving The Cuisine : ${error}`});
            })
    }
};
// -----For Updating an Existing Cuisine by ID.-----
export const updateCuisine = (req, res) => {
    const id = req.params.id;
    const {imageURL , cuisineName} = req.body;
    const updatedCuisine = req.body;
    Cuisine.findById(id)
        .then((cuisine) => {
            if(!cuisine){
                return res.status(404).send({ Error : "Cuisine Not Found !!!"});
            }
            else{
                cuisine.imageURL = updatedCuisine.imageURL;
                cuisine.cuisineName = updatedCuisine.cuisineName;
                cuisine.save()
                    .then(() => {
                        return res.status(200).send({ Message : "Cuisine Successfully Updated ..."});
                    })
                    .catch((error) => {
                        return res.status(500).send({ Error : `Error Occurred While Updating The Cuisine : ${error}`});
                    })
            }
        })
        .catch((error) => {
            return res.status(404).send({ Error : `Error Occured While Finding The Cuisine : ${error}`});
        })
};
// -----For Deleting a Cuisine by ID.-----
export const deleteCuisine = (req, res) => {
    const id = req.params.id;
    Cuisine.findByIdAndDelete(id)
        .then((deletedCuisine) => {
            if(!deletedCuisine){
                return res.status(404).send({ Error : "Cuisine Not Found !!!"});
            }
            else{
                return res.status(200).send({ Message : "Cuisine Successfully Deleted ..."});
            }
        })
        .catch((error) => {
            return res.status(500).send({ Error : `Error Occured While Deleting The Cuisine : ${error}`});
        })
};
// -----For Fetching all Cuisines from the Database.-----
export const getAllCuisines = (req, res) => {
    Cuisine.find()
        .then((cuisines) => {
            return res.status(200).send(cuisines);
        })
        .catch((error) => {
            return res.status(500).send({ Error : `Error Occured While Fetching The List of Cuisines : ${error}`});
        })
};
// -----For Fetching a specific cuisine by ID.-----
export const getCuisineById = (req, res) => {
    const id = req.params.id;
    Cuisine.findById(id)
        .then((cuisineById) => {
            if(!cuisineById){
                return res.status(404).send({ Error: 'Cuisine Not Found !!!' });
            }
            else{
                return res.status(200).send(cuisineById);
            }
        })
        .catch((error) => {
            return res.status(500).send({ Error : `Error Occured While Fetching Cuisine By ID : ${error}`});
        })
};
