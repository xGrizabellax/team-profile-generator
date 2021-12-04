const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {    
    super(name, id, email);
    this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}



const manager = new Manager('Sam', 2666, 'sampagecode@gmail.com', 87)
console.log(manager)


module.exports = Manager;
