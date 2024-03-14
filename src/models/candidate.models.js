
const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        lowercase: [true, "Name must be lowercase"],
        min: [3, "Name must be at least 3 characters long"],
        max: [20, "Name must be at most 20 characters long"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
        lowercase: [true, "Email must be lowercase"],
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Invalid email"],
    },
    phone: {
        type: String,
        required: [true, "Phone is required"],
        unique: [true, "Phone already exists"],
        match: [/^\d{10}$/, "Invalid phone"],
    },
    resume: {
        type: String,
        required: [true, "Resume is required"],
    },
    data: {
        type: Object,
        required: [true, "Data is required"],
    },
    vacancy_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vacancy",
        required: [true, "Vacancy is required"],
    },
    isSelected: {
        type: Boolean,
        required: [true, "Status is required"],
        default: false,
    },
    feedback: {
        type: String,
        required: [false, "Feedback is required"],
        default: "",
    },
    obtained_points: {
        type: Number,
        required: [false, "Obtained points is required"],
        min: [0, "Obtained points must be at least 0"],
        max: [100, "Obtained points must be at most 100"],
    }
}, { timestamps: true });

export default mongoose.model('Candidate', candidateSchema);