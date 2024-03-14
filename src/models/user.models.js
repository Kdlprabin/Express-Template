import mongoose from "mongoose"

const authSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Email is required"],
        lowercase: [true, "Email must be lowercase"],
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Invalid email"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false,
        min: [6, "Password must be at least 6 characters long"],
        max: [20, "Password must be at most 20 characters long"],
        match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/, "Invalid password"],
    },
    role: {
        type: String,
        required: [true, "Role is required"],
        enum: ["EMPLOYEE", "ADMIN", "INTERVIEWER"],
        lowercase: [true, "Role must be lowercase"],
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        lowercase: [true, "Username must be lowercase"],
    },
    image: {
        type: String,
        required: [false, "Image is required"],
    }
}, { timestamps: true }
)

export default mongoose.model("Auth", authSchema)