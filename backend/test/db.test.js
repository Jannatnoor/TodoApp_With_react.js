import assert from "assert";
import todoSchema from "../src/Database/model.js";

// Describe our tests
describe("Finding records", function () {
  var char;
  // Add a character to the db before each tests
  beforeEach(function (done) {
    char = new todoSchema({
      title: "Make a Todo App",
    });
    char.save().then(function () {
      done();
    });
  });

  // Create tests
  it("Finds a record from the database", function (done) {
    todoSchema.findOne({ title: "Make a Todo App" }).then(function (result) {
      assert(result.title === "Make a Todo App");
      done();
    });
  });

  it("Finds a record by unique id", function (done) {
    todoSchema.findOne({ _id: char._id }).then(function (result) {
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });
});
