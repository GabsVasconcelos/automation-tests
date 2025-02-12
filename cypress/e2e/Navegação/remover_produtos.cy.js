describe('Testes Automatizados com Cypress - Automation Exercise', () => {

    it("Remover produtos do carrinho", () => {
      cy.visit("https://automationexercise.com/");
  
      cy.contains("Products").click();
      cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
      cy.contains('Continue Shopping').click();
      cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
      cy.contains('Continue Shopping').click();
      cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
      cy.contains("View Cart").click();
  
      cy.contains("Shopping Cart").should("be.visible");
      cy.get('#cart_items > :nth-child(1)').should("be.visible");
      cy.get('#product-1').should("be.visible");
      cy.get('#product-1 > .cart_description').should("be.visible");
      cy.get('#product-1 > .cart_price').should("be.visible");
      cy.get('#product-1 > .cart_quantity').should("be.visible");
      cy.get('#product-1 > .cart_total').should("be.visible");
      cy.get('#product-1 > .cart_delete > .cart_quantity_delete > .fa').click()
      cy.get('#product-1').should('not.exist')
      cy.get('#product-2').should("be.visible");
      cy.get('#product-2 > .cart_description').should("be.visible");
      cy.get('#product-2 > .cart_price').should("be.visible");
      cy.get('#product-2 > .cart_quantity').should("be.visible");
      cy.get('#product-2 > .cart_total').should("be.visible");
      cy.get('#product-2 > .cart_delete > .cart_quantity_delete > .fa').click()
      cy.get('#product-2').should('not.exist')
      cy.get('#product-3').should("be.visible");
      cy.get('#product-3 > .cart_description').should("be.visible");
      cy.get('#product-3 > .cart_price').should("be.visible");
      cy.get('#product-3 > .cart_quantity').should("be.visible");
      cy.get('#product-3 > .cart_total').should("be.visible");
      cy.get('#product-3 > .cart_delete > .cart_quantity_delete > .fa').click()
      cy.get('#product-3').should('not.exist')
  
      cy.get('#empty_cart').contains('Cart is empty! Click here to buy products.')
    });
});