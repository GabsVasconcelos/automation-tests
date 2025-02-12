describe('Testes Automatizados com Cypress - Automation Exercise', () => {
it("Exibir produtos de categoria", () => {
    cy.visit("https://automationexercise.com/");
    cy.get('.left-sidebar').should('be.visible')
    cy.get('.left-sidebar > :nth-child(1)').contains('Category').should('be.visible')
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge').click();
    cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click();
    cy.get('.title').contains('Women - Dress Products').should('be.visible');
    cy.get(':nth-child(2) > .panel-heading > .panel-title > a > .badge').click()
    cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click();
    cy.get('.title').contains('Men - Tshirts Products').should('be.visible');


  });
});