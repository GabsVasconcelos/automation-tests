describe('Testes Automatizados com Cypress - Automation Exercise', () => {
it("Login do usuário com e-mail e senha corretos", () => {
  cy.fixture("credentials").then((cred) => {
    cy.visit("https://automationexercise.com/");

    cy.contains("Signup / Login").click();
    cy.get('.login-form > h2').should('be.visible');

    cy.get('[data-qa="login-email"]').type(cred.email);
    cy.get('[data-qa="login-password"]').type(cred.password);
    cy.get('[data-qa="login-button"]').click();


    cy.contains("Logout").should("be.visible");
  });
});
});