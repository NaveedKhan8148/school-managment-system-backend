import mongoose, { Schema } from "mongoose";

const academicWarningSchema = new Schema(
    {
        studentId: {
            type: Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },
        ruleViolated: {
            type: String,
            required: true,
            trim: true,
        },
        detailDescription: {
            type: String,
            required: true,
            trim: true,
        },
        warningDate: {
            type: Date,
            required: true,
            default: Date.now,
        },
    },
    { timestamps: true }
);

export const AcademicWarning = mongoose.model("AcademicWarning", academicWarningSchema);
