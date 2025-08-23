import asyncHandler from 'express-async-handler';
// import User from '../models/userModel.js'


// @desc Register a user
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Register a user" });
});

// @desc Login a user
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Login a user" });
});

// @desc Current user information
// @route POST /api/users/login
// @access public
const currentUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Current user information" });
});

// Export the controller
export { registerUser,
        loginUser,
        currentUser
 };