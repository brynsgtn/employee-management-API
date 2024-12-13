import mongoose from "mongoose";


const employeeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        employeeId: {
            type: Number,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        salary: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);


export const Employee = mongoose.model('Employee', employeeSchema);