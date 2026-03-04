const UserRepository = require("../infrastructure/repositories/UserRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


class UserService {

    async register(name, email, password, role = "student") {

        const hashed = await bcrypt.hash(password, 10);


        return UserRepository.create({

            name,
            email,
            password: hashed,
            role

        });

    }

    async login(email, password) {

        const user = await UserRepository.findByEmail(email);

        if (!user) {

            throw new Error("Usuario no existe");

        }

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {

            throw new Error("Password incorrecto");

        }

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET no está configurado");
        }

        const token = jwt.sign(

            {
                id: user.id,
                email: user.email,
                role: user.role
            },

            process.env.JWT_SECRET,

            {  expiresIn: process.env.JWT_EXPIRES }

        );

        return token;

    }

    async getProfile(id) {

        const user = await UserRepository.findById(id);

        if (!user) {
            throw new Error("Usuario no encontrado");
        }

        return user;

    }

}

module.exports = new UserService();
