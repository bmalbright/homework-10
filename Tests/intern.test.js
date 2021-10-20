const Intern = require("../lib/intern.js")

describe("Intern", () => {
    describe("initialization", () => {

      it("creates the Intern subclass under the Employee class", () => {
          const internTest = new Intern("Zeke", 26, "zeke@zeke.com", "Texas")

        expect(internTest.name).toEqual("Zeke");
        expect(internTest.id).toEqual(26);
        expect(internTest.email).toEqual("zeke@zeke.com");
        expect(internTest.college).toEqual("Texas");
      });

    })
    describe("getCollege", () => {
      it("gets the college of the intern", () => {
        const testValue = "Texas";
        const internTest = new Intern("Zeke", 26, "zeke@zeke.com", testValue);
        expect(internTest.college).toBe(testValue);
      });
     });


  });