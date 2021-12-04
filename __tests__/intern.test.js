
const Intern = require('../lib/intern')

describe('Intern', () => {
    it('contains four properties describing the object including a new school property', () => {
        const name = "Ben";
        const id = 2323;
        const email = "sampagecode@gmail.com";
        const school = "DePaul University";
        const obj = new Intern(name, id, email, school);
        expect(obj.name).toBe(name);
        expect(obj.id).toBe(id);
        expect(obj.email).toBe(email);
        expect(obj.school).toBe(school);
    })
    describe('getSchool', () => {
        it('returns a string containing the school property of the object', () => {
            const obj = new Intern("Matt", 1735, "stache@doctor.edu", "Loyola University");
            expect(obj.getSchool()).toBe("Loyola University");
        });
    });
});