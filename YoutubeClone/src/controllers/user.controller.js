import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req, res) => {
<<<<<<< HEAD
    res.status(200).json(
        {
            message:"ok"
        }
    )
=======
    res.status(200).json({
        message:"ok"
    })
>>>>>>> bcc76cd621f61a8ee8006a5c5f24629b6fbbccd0
})

export {registerUser}