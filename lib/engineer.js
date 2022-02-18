const employee = require('./employee');

class Engineer {

    constructor(name, email, github, id){
        this.name = name;
        this.email = email;
        this.github = github
        this.id = id;
    }

    Name(){
        return this.name;
    }

    Email(){
        return this.email;
    }

    Github(){
        return this.github;
    }

    Id(){
        return this.Id;
    }

    Status(){
        return 'engineer';
    }
}

module.exports = Engineer;





