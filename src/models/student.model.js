import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },
        rollNo: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        studentName: {
            type: String,
            required: true,
            trim: true,
        },
        address: {
            type: String,
            trim: true,
        },
        dateOfJoining: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE"],
            default: "ACTIVE",
        },
        classId: {
            type: Schema.Types.ObjectId,
            ref: "Class",
            required: true,
        },
    },
    { timestamps: true }
);

export const Student = mongoose.model("Student", studentSchema);
