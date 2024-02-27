describe("Signin", () => {
  it("User is logged In", () => {
    cy.visit("http://localhost:3000");
    cy.findByRole("textbox", { name: /username/i }).type("hello");
    cy.findByLabelText(/password/i).type("strongpassword");
    cy.findByRole("button", { name: /submit/i }).click();
  });
});
