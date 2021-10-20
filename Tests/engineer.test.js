const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
    describe("initialization", () => {
     
      it("creates the Engineer subclass under the Employee class", () => {
          const engineerTest = new Engineer("Zeke", 26, "zeke@zeke.com", "github")

        expect(engineerTest.name).toEqual("Zeke");
        expect(engineerTest.id).toEqual(26);
        expect(engineerTest.email).toEqual("zeke@zeke.com");
        expect(engineerTest.github).toEqual("github");
      });
    })

  });
    describe("getGitHub", () => {
    it("gets the Github username of the engineer", () => {
      const testValue = "github";
      const engineerTest = new Engineer("Zeke", 26, "zeke@zeke.com", testValue);
      expect(engineerTest.github).toBe(testValue);
    });


  //   describe("getRole", () => {
  //     it ("Returns the name, id, email, and github of subclass of engineer ", () => {
  //         const name = "Zeke"
  //         const id = 26
  //         const email = "zeke@zeke.com"
  //         const github = "github"
  //         const engineerTest = new Engineer (name, id, email, github)
  //         expect(engineerTest).toEqual("Zeke")
  //     })
  //     })
    
  });