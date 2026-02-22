const db = require("../database/connection");

class GradeRepository {

    assign(student_id, subject_id, grade) {

        return new Promise((resolve, reject) => {

            db.query(
                "INSERT INTO grades (student_id,subject_id,grade) VALUES (?,?,?)",
                [student_id, subject_id, grade],
                (err, result) => {

                    if (err) reject(err);

                    resolve(result);

                }
            );

        });

    }

    findByStudent(student_id) {

        return new Promise((resolve, reject) => {

            db.query(
                `
SELECT subjects.name, grades.grade
FROM grades 
JOIN subjects ON grades.subject_id=subjects.id
WHERE grades.student_id=?
`,
                [student_id],
                (err, result) => {

                    if (err) reject(err);

                    resolve(result);

                }
            );

        });

    }

}

module.exports = new GradeRepository();