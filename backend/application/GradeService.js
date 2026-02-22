const GradeRepository=require("../infrastructure/repositories/GradeRepository");

class GradeService{

assign(student_id,subject_id,grade){

return GradeRepository.assign(student_id,subject_id,grade);

}

getStudentGrades(student_id){

return GradeRepository.findByStudent(student_id);

}

}

module.exports=new GradeService();