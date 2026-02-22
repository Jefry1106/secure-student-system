const express = require("express");

const router = express.Router();

const SubjectController = require("../controllers/SubjectController");

const AuthMiddleware = require("../../middleware/AuthMiddleware");

const RoleMiddleware = require("../../middleware/RoleMiddleware");

router.post("/",AuthMiddleware,RoleMiddleware("admin"),SubjectController.create);

router.get("/",AuthMiddleware,SubjectController.getAll);

module.exports = router;