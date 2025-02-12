describe('Testes Automatizados com Cypress - Automation Exercise', () => {

it("Adicionar ao carrinho de Itens recomendados", () => {
    cy.visit("https://automationexercise.com/");

    cy.get('.recommended_items').scrollIntoView().should('be.visible')
    cy.get('.recommended_items > .title').contains('recommended items')
    cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.contains("View Cart").click();
    cy.contains("Shopping Cart").should("be.visible");
    cy.get('#cart_items > :nth-child(1)').should("be.visible");
    cy.get('.product_image').should("be.visible");
    cy.get('.cart_description').should("be.visible");
    cy.get('.cart_price').should("be.visible");
    cy.get('.cart_quantity').should("be.visible");
    cy.get('.cart_total').should("be.visible");

  });
});