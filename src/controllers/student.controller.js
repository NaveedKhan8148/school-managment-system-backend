import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Student } from "../models/student.model.js";
import { User } from "../models/user.model.js";

// POST /api/v1/students/
const createStudent = asyncHandler(async (req, res) => {
    const { email, password, rollNo, studentName, address, dateOfJoining, classId } = req.body;

    if ([email, password, rollNo, studentName, dateOfJoining, classId].some((f) => !f?.toString().trim())) {
        throw new ApiError(400, "All required fields must be provided");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) throw new ApiError(409, "Email already registered");

    const user = await User.create({ email, password, role: "STUDENT" });

    const student = await Student.create({
        userId: user._id,
        rollNo,
        studentName,
        address,
        dateOfJoining,
        classId,
    });

    return res.status(201).json(new ApiResponse(201, student, "Student created successfully"));
});

// GET /api/v1/students/
const getAllStudents = asyncHandler(async (req, res) => {
    const students = await Student.find()
        .populate("userId", "-password -refreshToken")
        .populate("classId", "name");
    return res.status(200).json(new ApiResponse(200, students, "Students fetched"));
});

// GET /api/v1/students/:id
const getStudentById = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id)
        .populate("userId", "-password -refreshToken")
        .populate("classId", "name");
    if (!student) throw new ApiError(404, "Student not found");
    return res.status(200).json(new ApiResponse(200, student, "Student fetched"));
});

// GET /api/v1/students/class/:classId
const getStudentsByClass = asyncHandler(async (req, res) => {
    const students = await Student.find({ classId: req.params.classId })
        .populate("userId", "-password -refreshToken")
        .populate("classId", "name");
    return res.status(200).json(new ApiResponse(200, students, "Students fetched for class"));
});

// PATCH /api/v1/students/:id
const updateStudent = asyncHandler(async (req, res) => {
    const { rollNo, studentName, address, dateOfJoining, classId } = req.body;

    const student = await Student.findByIdAndUpdate(
        req.params.id,
        { $set: { rollNo, studentName, address, dateOfJoining, classId } },
        { new: true, runValidators: true }
    );

    if (!student) throw new ApiError(404, "Student not found");
    return res.status(200).json(new ApiResponse(200, student, "Student updated successfully"));
});

// DELETE /api/v1/students/:id
const deleteStudent = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id);
    if (!student) throw new ApiError(404, "Student not found");

    await User.findByIdAndDelete(student.userId);
    await Student.findByIdAndDelete(req.params.id);

    return res.status(200).json(new ApiResponse(200, {}, "Student deleted successfully"));
});

// student.controller.js
// GET /api/v1/students/me
const getMyStudentProfile = asyncHandler(async (req, res) => {
    const student = await Student.findOne({ userId: req.user._id })
        .populate("userId", "-password -refreshToken")
        .populate("classId", "name");
    if (!student) throw new ApiError(404, "Student profile not found");
    return res.status(200).json(new ApiResponse(200, student, "Profile fetched"));
});

export { createStudent, getAllStudents, getStudentById, getStudentsByClass, updateStudent, deleteStudent ,getMyStudentProfile};
