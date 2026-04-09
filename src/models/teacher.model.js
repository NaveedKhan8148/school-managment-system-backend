import mongoose, { Schema } from "mongoose";

const teacherSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        cnicNumber: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        contactNumber: {
            type: String,
            required: true,
            trim: true,
        },
        subject: {
            type: String,
            required: true,
            trim: true,
        },
        dateOfJoining: {
            type: Date,
            required: true,
        },
        address: {
            type: String,
            trim: true,
        },
    },
    { timestamps: true }
);

export const Teacher = mongoose.model("Teacher", teacherSchema);
