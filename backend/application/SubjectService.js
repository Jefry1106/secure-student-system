const SubjectRepository = require("../infrastructure/repositories/SubjectRepository");

class SubjectService {

    create(name) {

        return SubjectRepository.create(name);

    }

    getAll() {

        return SubjectRepository.findAll();

    }

}

module.exports = new SubjectService();