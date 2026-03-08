class Subject {

    constructor(id, name) {

        this.id = id;
        this.name = name;

    }
     // Método para validar el nombre de la materia
    isValid() {
        return this.name && this.name.trim().length > 0;
    }

    // Método para formatear el nombre
    formatName() {
        return this.name.trim().charAt(0).toUpperCase() + this.name.trim().slice(1).toLowerCase();
    }

    // Método para convertir a JSON
    toJSON() {
        return {
            id: this.id,
            name: this.name
        };
    }

    // Método estático para crear una materia desde datos
    static fromJSON(data) {
        return new Subject(data.id, data.name);
    }
}


module.exports = Subject;