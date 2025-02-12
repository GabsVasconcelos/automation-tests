describe('Testes Automatizados com Cypress - Automation Exercise', () => {

it("Visitar casos de teste", () => {
    cy.visit("https://automationexercise.com/");

    cy.contains("Test Cases").click();

    cy.get('span').contains('Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:').should('be.visible')
    cy.get('#form > .container').should('be.visible');

  });
});