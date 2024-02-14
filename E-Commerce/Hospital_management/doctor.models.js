import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    Qualifications: {
        type: String,
        required: true,
    },
    experienceInYears: {

    },
}, {timestamps: true});

export const Doctor = mongoose.model("Doctor", doctorSchema);