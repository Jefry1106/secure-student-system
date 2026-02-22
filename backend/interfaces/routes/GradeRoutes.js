const express=require("express");

const router=express.Router();

const GradeController=require("../controllers/GradeController");

const AuthMiddleware=require("../../middleware/AuthMiddleware");

const RoleMiddleware=require("../../middleware/RoleMiddleware");

router.post("/assign",AuthMiddleware,RoleMiddleware("admin"),GradeController.assign);

router.get("/my-grades",AuthMiddleware,GradeController.myGrades);

module.exports=router;