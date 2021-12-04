const Employee = require('../lib/employee')

describe("Employee", () => {
    it("contains three properties that describe the object", () => {
        const name = "Aidan";
        const id = 3554;
        const email = "sampage6@gmail.com";
        const obj = new Employee(name, id, email);
        expect(obj.name).toBe(name);
        expect(obj.id).toBe(id);
        expect(obj.email).toBe(email);
    })
    describe("getName", () => {
      it("it should return a string from the name property of the object", () => {
        const obj = new Employee('Sam', 1800, 'sampagecode@gmail.com');
        expect(obj.getName()).toBe('Sam');
      });
    });
    describe("getId", () => {
        it("it should return a number from the id property of the object", () => {
        const obj = new Employee('Ryan', 2992, 'yes@no.com');
        expect(obj.getId()).toBe(2992);
        });
    });
    describe("getEmail", () => {
        it("it should return a string from the email property of the object", () => {
            const obj = new Employee('Trent', 169, 'sampagecode@gmail.com');
            expect(obj.getEmail()).toBe('sampagecode@gmail.com')
        })
    });
    describe("getRole", () => {
        it("it should return a string of the role", () => {
            const obj = new Employee('Bucky', 777, 'sampage@4455.org');
            expect(obj.getRole()).toBe('Employee')
        })
    })
});