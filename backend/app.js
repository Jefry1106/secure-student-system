const express = require("express");

const cors = require("cors");

const authRoutes = require("./interfaces/routes/AuthRoutes");

const subjectRoutes=require("./interfaces/routes/SubjectRoutes");

const gradeRoutes=require("./interfaces/routes/GradeRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/subjects",subjectRoutes);

app.use("/api/grades",gradeRoutes);

module.exports = app;