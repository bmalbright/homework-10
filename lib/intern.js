const Employee = require ("./employee")

class Intern extends Employee {
    constructor (name, id, email, college) {
        super(name, id, email)
        this.college = college
    }
    getCollege() {
        return this.college;
    };
    getEmployeeType() {
        return "Intern";
    };
}

module.exports = Intern