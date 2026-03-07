class Grade {

    constructor(id, student_id, subject_id, grade) {

        this.id = id;
        this.student_id = student_id;
        this.subject_id = subject_id;
        this.grade = grade;

    }
    
    // Método para validar si la nota es válida
    isValid() {
        return this.grade >= 0 && this.grade <= 10;
    }

    // Método para obtener el estado de la nota
    getStatus() {
        if (this.grade >= 6) return 'Aprobado';
        return 'Reprobado';
    }

    // Método para convertir a JSON
    toJSON() {
        return {
            id: this.id,
            student_id: this.student_id,
            subject_id: this.subject_id,
            grade: this.grade,
            status: this.getStatus()
        };
    }
}


module.exports = Grade;