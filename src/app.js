import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())


import userRouter from './routes/user.routes.js'

// ── School Management routes ──────────────────────────────────────────────────
import teacherRouter from "./routes/teacher.routes.js"
import studentRouter from "./routes/student.routes.js"
import parentRouter from "./routes/parent.routes.js"
import classRouter from "./routes/class.routes.js"
import attendanceRouter from "./routes/attendance.routes.js"
import feesRouter from "./routes/fees.routes.js"
import resultRouter from "./routes/result.routes.js"
import timetableRouter from "./routes/timetable.routes.js"
import warningRouter from "./routes/academicWarning.routes.js"

// ── Existing route declarations ───────────────────────────────────────────────
// app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/users", userRouter)

// ── School Management route declarations ─────────────────────────────────────
app.use("/api/v1/teachers", teacherRouter)
app.use("/api/v1/students", studentRouter)
app.use("/api/v1/parents", parentRouter)
app.use("/api/v1/classes", classRouter)
app.use("/api/v1/attendance", attendanceRouter)
app.use("/api/v1/fees", feesRouter)
app.use("/api/v1/results", resultRouter)
app.use("/api/v1/timetable", timetableRouter)
app.use("/api/v1/warnings", warningRouter)

export { app }
