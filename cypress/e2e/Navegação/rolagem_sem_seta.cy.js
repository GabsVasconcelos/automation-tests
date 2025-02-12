describe('Testes Automatizados com Cypress - Automation Exercise', () => {
it("Verificar a rolagem para cima sem o botão 'Seta' e a funcionalidade de rolagem para baixo", () => {
    cy.visit("https://automationexercise.com/");

    cy.get('.footer-widget > .container').scrollIntoView().should('be.visible')
    cy.get('.single-widget > h2').should('be.visible').and('contain.text', 'Subscription');
    
    cy.get('#slider-carousel > .carousel-inner').scrollIntoView().should('be.visible')
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
  });
})