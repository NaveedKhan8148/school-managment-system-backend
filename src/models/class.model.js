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
    },
    { timestamps: true }
);

export const Class = mongoose.model("Class", classSchema);
