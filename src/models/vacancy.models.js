import mongoose from "mongoose"

const vacancySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        unique: [true, "Title already exists"],
        lowercase: [true, "Title must be lowercase"],
        min: [3, "Title must be at least 3 characters long"],
        max: [20, "Title must be at most 20 characters long"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        min: [10, "Description must be at least 10 characters long"],
        max: [100, "Description must be at most 100 characters long"],
    },
    start_date: {
        type: Date,
        required: [true, "Start date is required"],
    },
    end_date: {
        type: Date,
        required: [true, "End date is required"],
    },
    candidates_required: {
        type: Number,
        required: [true, "Candidates required is required"],
        min: [1, "Candidates required must be at least 1"],
        max: [100, "Candidates required must be at most 100"],
    },
    is_portal_created: {
        type: Boolean,
        required: [true, "Portal created is required"],
        default: false,
    },
    department_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
        required: [true, "Department is required"],
    },
}, { timestamps: true })

export default mongoose.model("Vacancy", vacancySchema)