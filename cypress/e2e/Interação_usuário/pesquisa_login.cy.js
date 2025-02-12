describe('Testes Automatizados com Cypress - Automation Exercise', () => {

  it("Pesquisar produtos e verificar carrinho após o login", () => {
    cy.fixture("credentials").then((cred) => {
      cy.visit("https://automationexercise.com/");

      cy.contains("Products").click();
      cy.get('.title').should('be.visible');
      cy.get('#search_product').type('Frozen Tops For Kids')
      cy.get('#submit_search').click();
      cy.get('.productinfo').should('be.visible');
      cy.get('.choose > .nav > li > a').click();
      cy.get('.product-information').should('be.visible');
      cy.get('.product-information > h2').contains('Frozen Tops For Kids').should('be.visible');
      cy.get('.product-information > :nth-child(3)').should('be.visible');
      cy.get(':nth-child(5) > span').should('be.visible');
      cy.get('label').should('be.visible');
      cy.get('.product-information > :nth-child(6)').should('be.visible');
      cy.get(':nth-child(5) > .btn').click()

      cy.contains("Signup / Login").click();
      cy.get('.login-form > h2').should('be.visible');



      cy.get('[data-qa="login-email"]').type(cred.email);
      cy.get('[data-qa="login-password"]').type(cred.password);
      cy.get('[data-qa="login-button"]').click();

      cy.contains('Logged in as').should("be.visible");
      cy.contains("Cart").click();
      cy.get('#cart_items > :nth-child(1)').should("be.visible");
      cy.get('.product_image').should("be.visible");
      cy.get('.cart_description').should("be.visible");
      cy.get('.cart_price').should("be.visible");
      cy.get('.cart_quantity').should("be.visible");
      cy.get('.cart_total').should("be.visible");

    });
  })
});