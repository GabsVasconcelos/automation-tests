describe('Testes Automatizados com Cypress - Automation Exercise', () => {

    it("Verificar quantidade de produtos no carrinho", () => {
      cy.visit("https://automationexercise.com/");
  
      cy.contains("Products").click();
      cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click();
      cy.get('#quantity').clear().type('4');
      cy.get(':nth-child(5) > .btn').click();
      cy.contains("View Cart").click();
  
      cy.contains("Shopping Cart").should("be.visible");
      cy.get('#cart_items > :nth-child(1)').should("be.visible");
      cy.get(' .cart_description').should("be.visible");
      cy.get(' .cart_price').should("be.visible");
      cy.get(' .cart_quantity').invoke('text').then((text) => {
        expect(text.trim()).to.eq('4');
      });
      cy.get('.cart_total').should("be.visible");
  
  
    });
});