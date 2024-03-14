import mongoose from "mongoose"

const inputFieldSchema = new mongoose.Schema({
    label: {
        type: String,
        required: [true, "Label is required"],
        lowercase: [true, "Label must be lowercase"],
        min: [3, "Label must be at least 3 characters long"],
        max: [20, "Label must be at most 20 characters long"],
    },
    type: {
        type: String,
        required: [true, "Type is required"],
        lowercase: [true, "Type must be lowercase"],
        enum: ["text", "email", "number", "date", "file"],
    },
    placeholder: {
        type: String,
        required: [true, "Placeholder is required"],
        lowercase: [true, "Placeholder must be lowercase"],
        min: [3, "Placeholder must be at least 3 characters long"],
        max: [20, "Placeholder must be at most 20 characters long"],
    },
    required: {
        type: Boolean,
        required: [true, "Required is required"],
        default: false,
    },
    unique: {
        type: Boolean,
        required: [true, "Unique is required"],
        default: false,
    }
})

const formSchema = new mongoose.Schema({
    vacancy_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vacancy",
        required: [true, "Vacancy is required"],
    },
    input_fields: [inputFieldSchema],
}, { timestamps: true })

export default mongoose.model("Form", formSchema)