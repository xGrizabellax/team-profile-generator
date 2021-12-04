const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    it('it contains four properties that describe the class including a new github property', () => {
        const name = "Betty";
        const id = 1844;
        const email = "sampage6@gmail.com";
        const github = "rampage1010@aol.com";
        const obj = new Engineer(name, id, email, github);
        expect(obj.name).toBe(name);
        expect(obj.id).toBe(id);
        expect(obj.email).toBe(email);
        expect(obj.github).toBe(github);
    });
    describe('getGithub', () => {
        it('it returns a string containing the github propery of the object', () => {
            const obj = new Engineer("Sammy", 8822, "sampage9@gmail.com", "xGrizabellax");
            expect(obj.getGithub()).toBe("xGrizabellax");
        });
    });
});