import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req, res) => {
    // get user details from front end
    // validation - not empty
    // check if user account already exist: username, email
    // check for avatars, check for images
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token from feild from user
    // check for user creation
    // return res

    const {fullName, username, email, password}= req.body
    console.log("email: ", email);
})

export {registerUser}