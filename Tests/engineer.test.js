const Engineer = require("./lib/engineer.js");

describe("Engineer", () => {
    describe("initialization", () => {
     
      it("creates the Engineer subclass under the Employee class", () => {
          const Engineer = new Engineer("Zeke", 26, "zeke@zeke.com", 201)

        expect(Engineer.name).toEqual("string");
        expect(Engineer.id).toEqual(num);
        expect(Engineer.email).toEqual(email);
        expect(Engineer.github).toEqual("string");
      });

    });