import mongoose, { Schema } from "mongoose";

const parentSchema = new Schema(
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
        cnicNo: {
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
    },
    { timestamps: true }
);

export const Parent = mongoose.model("Parent", parentSchema);
