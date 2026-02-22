const SubjectService = require("../../application/SubjectService");

exports.create = async (req, res) => {

    try {

        await SubjectService.create(req.body.name);

        res.json({ message: "Materia creada" });

    } catch (error) {

        res.status(500).json({ error: error.message });

    }

};

exports.getAll = async (req, res) => {

    const subjects = await SubjectService.getAll();

    res.json(subjects);

};