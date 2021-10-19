const Employee = require ("./employee")

describe("Employee", () => {
    describe("initialization", () => {
     
      it("creates the Engineer subclass", () => {
          const Employee = new Employee("Zeke", 26, "zeke@zeke.com")

        expect(Employee.name).toEqual("string");
        expect(Employee.id).toEqual(num);
        expect(Employee.email).toEqual(email);
      });

    });