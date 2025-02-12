describe('Testes Automatizados com Cypress - Automation Exercise', () => {
it("Visualizar e colocar produtos da marca no carrinho", () => {
    cy.visit("https://automationexercise.com/");
    cy.get('.left-sidebar').should('be.visible')
    cy.get('.brands_products > h2').contains('Brands').should('be.visible')
    cy.get('.brands-name > .nav > :nth-child(1) > a').click();
    cy.get('.title').contains('Brand - Polo Products').should('be.visible');
    cy.get(' .product-image-wrapper').should('be.visible')
    cy.get('.brands-name > .nav > :nth-child(6) > a').click()
    cy.get('.title').contains('Brand - Allen Solly Junior Products').should('be.visible');
    cy.get(' .product-image-wrapper').should('be.visible')
  });
});