const Manager = require("./lib/manager.js");

describe("Manager", () => {
    describe("initialization", () => {
     
      it("creates the Manager subclass under the Employee class", () => {
          const Manager = new Manager("Zeke", 26, "zeke@zeke.com", 201)

        expect(Manager.name).toEqual("string");
        expect(Manager.id).toEqual(num);
        expect(Manager.email).toEqual(email);
        expect(Manager.office).toEqual(num);
      });

    });