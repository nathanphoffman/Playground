// Start the app first (pnpm dev), then: pnpm cy:run
describe("hello", () => {
  it("shows the heading and has no a11y violations", () => {
    cy.visit("/");
    cy.contains("h1", "Hello, Cypress");
    cy.injectAxe();
    cy.checkA11y();
  });
});
