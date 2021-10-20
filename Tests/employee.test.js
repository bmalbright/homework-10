const Employee = require ("../lib/employee.js")

describe("Employee", () => {
    describe("initialization", () => {
     
      it("creates the Engineer subclass", () => {
          const employeeTest = new Employee("Zeke", 26, "zeke@zeke.com")

        expect(employeeTest.name).toEqual("Zeke");
        expect(employeeTest.id).toEqual(26);
        expect(employeeTest.email).toEqual("zeke@zeke.com");
      });

    })
  });