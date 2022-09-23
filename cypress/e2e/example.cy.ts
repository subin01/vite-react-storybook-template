describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.get(".app-name").should("contain.text", "App1");
  });
});

export {};
