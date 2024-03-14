import mongoose from "mongoose"

const markingCriteriaSchema = new mongoose.Schema({
    criteria: {
        type: String,
        required: [true, "Criteria is required"],
    },
    full_marks: {
        type: Number,
        required: [true, "full_marks is required"],
        min: [1, "full_marks must be at least 1"],
        max: [100, "full_marks must be at most 100"],
    }
});

const interviewSchema = new mongoose.Schema({
    vacancy_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vacancy",
        required: [true, "Vacancy is required"],
    },
    interviewer_ids: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        required: [true, "Interviewers are required"],
    },
    selected_candidate_ids: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Candidate",
        required: [true, "Selected candidates are required"],
    },
    date: {
        type: Date,
        required: [true, "Date is required"],
    },
    time: {
        type: String,
        required: [true, "Time is required"],
    },
    location: {
        type: String,
        required: [true, "Location is required"],
    },
    status: {
        type: String,
        required: [true, "Status is required"],
        enum: ["PENDING", "COMPLETE"],
        default: "pending",
    },
    marking_criteria: {

    }
}, { timestamps: true })

export default mongoose.model("Interview", interviewSchema)