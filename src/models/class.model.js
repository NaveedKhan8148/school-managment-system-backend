import mongoose, { Schema } from "mongoose";

const classSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true, // e.g. "CS-101"
        },
        classTeacherId: {
            type: Schema.Types.ObjectId,
            ref: "Teacher",
            required: true,
        },
        section:{
            type: String,
            trim: true, // e.g. "A", "B", "C"
        },
        academicYear: {
            type: String,
            required: false,
            trim: true, // e.g. "2023-2024"
        },

    },
    { timestamps: true }
);

export const Class = mongoose.model("Class", classSchema);
