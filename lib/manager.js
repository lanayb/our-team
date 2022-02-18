const employee = require('./employee');

class Manager {

    constructor(name, email, id, officeNum){
        this.name = name;
        this.email = email;
        this.id = id;
        this.officeNum = officeNum;
    }

    Name(){
        return this.name;
    }

    Email(){
        return this.email;
    }

    Id(){
        return this.id;
    }

    officeNumber(){
        return this.officeNum;
    }

    Status(){
        return 'Manager';
    }
}

module.exports = Manager;