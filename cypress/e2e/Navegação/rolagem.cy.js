describe('Testes Automatizados com Cypress - Automation Exercise', () => {
    it("Verifique a rolagem para cima usando o botão 'Seta' e a funcionalidade de rolagem para baixo", () => {
    cy.visit("https://automationexercise.com/");
    cy.get('.footer-widget > .container').scrollIntoView().should('be.visible')
    cy.get('.single-widget > h2').should('be.visible').and('contain.text', 'Subscription');
    cy.get('#scrollUp > .fa').click();
    cy.get('#slider-carousel > .carousel-inner').contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
  });
});