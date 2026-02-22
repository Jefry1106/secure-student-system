const GradeService = require("../../application/GradeService");

exports.assign = async (req, res) => {

    try {

        await GradeService.assign(

            req.body.student_id,
            req.body.subject_id,
            req.body.grade

        );

        res.json({ message: "Nota asignada" });

    } catch (error) {

        res.status(500).json({ error: error.message });

    }

};

exports.myGrades = async (req, res) => {

    const grades = await GradeService.getStudentGrades(req.user.id);

    res.json(grades);

};