import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: (true, "Please add the user name"),
    },
    email: {
        type: String,
        required: (true, "Please add the email address"),
        unique: [true, "Email already exists"],
    },
    password: {
        type: String,
        required: (true, "Please add the password"),
    }, 
}, {
    timestamps: true,
});

export default mongoose.model("User", userSchema);