const Manager = require('../lib/manager')

describe("Manager", () => {
    it("it contains four properties that describe the class", () => {
        const name = "John";
        const id = 1234;
        const email = "john@johnny.com";
        const officeNumber = 666;
        const obj = new Manager(name, id, email, officeNumber);
        expect(obj.name).toBe(name);
        expect(obj.id).toBe(id);
        expect(obj.email).toBe(email);
        expect(obj.officeNumber).toBe(officeNumber);
    })
    describe("officeNumber", () => {
      it("it should return a number from the officeNumber property of the object", () => {
        const obj = new Manager('Sam', 1800, 'sampagecode@gmail.com', 9999);
        expect(obj.officeNumber).toBe(9999);
      });
    });
    describe("getRole", () => {
        it("it should return a string of the role", () => {
            const obj = new Manager('Bart', 832, 'sampage@4455.org', 23);
            expect(obj.getRole()).toBe('Manager')
        })
    })

});
