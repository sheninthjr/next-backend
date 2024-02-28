describe("Signin", () => {
  it("User is logged In", () => {
    cy.visit("http://localhost:3000/signin");
    cy.findByRole("textbox", { name: /username/i }).type("sheninthjr");
    cy.findByLabelText(/password/i).type("secret");
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("button", { name: /toggle/i }).click();
    cy.findByRole("menuitem", { name: /light/i }).click();
  });
});
