const Manager = require("../lib/manager.js");

describe("Manager", () => {
    describe("initialization", () => {
     
      it("creates the Manager subclass under the Employee class", () => {
        const managerTest = new Manager("Zeke", 26, "zeke@zeke.com", 201)

        expect(managerTest.name).toEqual("Zeke");
        expect(managerTest.id).toEqual(26);
        expect(managerTest.email).toEqual("zeke@zeke.com");
        expect(managerTest.office).toEqual(201);
      });
    })

  })
  describe("getOffice", () => {
    it("gets the office of the manager", () => {
      const testValue = 201;
      const managerTest = new Manager("Zeke", 26, "zeke@zeke.com", testValue);
      expect(managerTest.office).toBe(testValue);
    });
   });
