const db = require("../database/connection");

class SubjectRepository {

    create(name) {

        return new Promise((resolve, reject) => {

            db.query(
                "INSERT INTO subjects (name) VALUES (?)",
                [name],
                (err, result) => {

                    if (err) reject(err);

                    resolve(result);

                }
            );

        });

    }

    findAll() {

        return new Promise((resolve, reject) => {

            db.query(
                "SELECT * FROM subjects",
                (err, result) => {

                    if (err) reject(err);

                    resolve(result);

                }
            );

        });

    }

}

module.exports = new SubjectRepository();