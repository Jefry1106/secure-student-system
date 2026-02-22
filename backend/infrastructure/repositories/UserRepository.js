const db = require("../database/connection");

class UserRepository {

    create(user) {

        return new Promise((resolve, reject) => {

            db.query(

                "INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)",

                [user.name, user.email, user.password, user.role],

                (err, result) => {

                    if (err) reject(err);

                    resolve(result);

                }

            );

        });

    }

    findByEmail(email) {

        return new Promise((resolve, reject) => {

            db.query(

                "SELECT * FROM users WHERE email=?",

                [email],

                (err, result) => {

                    if (err) reject(err);

                    resolve(result[0]);

                }

            );

        });

    }

    findById(id) {

        return new Promise((resolve, reject) => {

            db.query(
                "SELECT id,name,email,role,created_at FROM users WHERE id=?",
                [id],
                (err, result) => {

                    if (err) reject(err);

                    resolve(result[0]);

                });

        });

    }

}

module.exports = new UserRepository();