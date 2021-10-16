const Employee = require ("./employee")

class Manager extends Employee {
    constructor (name, id, email, office) {
        super(name, id, email)
        this.office = office
    }
    getOffice() {
        return this.office;
    };
    getEmployeeType() {
        return "Manager";
    };
}

module.exports = Manager