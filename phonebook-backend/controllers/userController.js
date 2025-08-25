import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

// @desc Register a user
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if ( !name || !email || !password ) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const userAvailable = await User.findOne({ email });

    if ( userAvailable ) {
        res.status(400);
        throw new Error("User already registered");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("The hashed password is: ", hashedPassword);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });
    
    console.log("User created: ", user);
    if (user) {
        res.status(201).json({
            _id: user.id,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error("User data is not valid");
    }
    
    res.status(200).json({ message: "Register a user" });
});

// @desc Login a user
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;

        if ( !email || !password ) {
            res.status(400);
            throw new Error("All fields are mandatory");
        }

        const user = await User.findOne({ email });

        if ( user && (await bcrypt.compare(password, user.password)) ) {
            const accessToken = jwt.sign({
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                },
            }, process.env.ACCESS_TOKEN_SECRET, 
                { expiresIn: "1m" }
            );
                res.status(200).json({ accessToken });
        } else {
            res.status(401);
            throw new Error("Email or password is not valid");
        }
    } catch (error) {
        console.error("Error during login:", error); // Log the error details
        res.status(500).json({ message: error.message }); // Respond with the error message
    }
});

// @desc Current user information
// @route POST /api/users/currentUser
// @access public
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

// Export the controller
export { registerUser,
        loginUser,
        currentUser
 };