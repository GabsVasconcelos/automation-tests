describe('Testes Automatizados com Cypress - Automation Exercise', () => {

it("verificar todos os produtos e a página de detalhes do produto", () => {
    cy.visit("https://automationexercise.com/");

    cy.contains("Products").click();
    cy.get('.title').should('be.visible').and('contain.text', 'All Products');
    cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('.product-information').should('be.visible');
    cy.get('.product-information > h2').should('be.visible');
    cy.get('.product-information > :nth-child(3)').should('be.visible');
    cy.get(':nth-child(5) > span').should('be.visible');
    cy.get('label').should('be.visible');
    cy.get('.product-information > :nth-child(6)').should('be.visible');
    cy.get('.product-information > :nth-child(7)').should('be.visible');
    cy.get('.product-information > :nth-child(8)').should('be.visible');



  });
});