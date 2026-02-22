const express = require("express");

const router = express.Router();

const AuthController = require("../controllers/AuthController");

const AuthMiddleware = require("../../middleware/AuthMiddleware");

const RoleMiddleware = require("../../middleware/RoleMiddleware");

router.post("/register", AuthController.register);

router.post("/login", AuthController.login);

router.get("/profile", AuthMiddleware, AuthController.profile);

router.get( "/admin",AuthMiddleware, RoleMiddleware("admin"), AuthController.adminPanel);

module.exports = router;