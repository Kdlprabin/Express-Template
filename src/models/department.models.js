import mongoose from "mongoose"

const departmentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Department name is required"],
        unique: [true, "Department name already exists"],
        lowercase: [true, "Department name must be lowercase"],
        min: [3, "Department name must be at least 3 characters long"],
        max: [20, "Department name must be at most 20 characters long"],
    },
},{timestamps: true})

export default mongoose.model("Department", departmentSchema)