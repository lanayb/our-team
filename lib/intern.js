const intern = require('./test/intern.test');

class Intern {

    constructor(name, email, school){
        this.name = name;
        this.email = email;
        this.school = school;
    }

    Name(){
        return this.name;
    }

    Email(){
        return this.email;
    }

    school(){
        return this.school;
    }

    Status(){
        return 'Intern';
    }
}

module.exports = Intern;