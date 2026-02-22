const UserService = require("../../application/UserService");

exports.register = async (req, res) => {

    try {

        await UserService.register(

            req.body.name,
            req.body.email,
            req.body.password,
            req.body.role

        );

        res.json({ message: "Usuario creado" });

    } catch (error) {

        res.status(500).json({ error: error.message });

    }

};

exports.login = async (req, res) => {

    try {

        const token = await UserService.login(

            req.body.email,
            req.body.password

        );

        res.json({ token });

    } catch (error) {

        res.status(401).json({ error: error.message });

    }

};

exports.profile = async (req, res) => {

    try {

        const user = await UserService.getProfile(req.user.id);

        res.json(user);

    } catch (error) {

        res.status(404).json({ error: error.message });

    }

};

exports.adminPanel = async (req, res) => {

    res.json({

        message: "Bienvenido Admin",

        user: req.user

    });

};