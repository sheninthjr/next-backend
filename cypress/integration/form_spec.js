const { describe } = require("node:test");
const { cy } = require("cypress");
describe("Login", () => {
  it("user is logged", () => {
    cy.visit("/");
  });
});
