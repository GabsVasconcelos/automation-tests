import { faker } from '@faker-js/faker';

describe('Testes Automatizados com Cypress - Automation Exercise', () => {
  it("Efetuar login antes de finalizar a compra", () => {
    cy.fixture("credentials").then((cred) => {
      cy.visit("https://automationexercise.com/");

      cy.contains("Signup / Login").click();
      cy.get('.login-form > h2').should('be.visible');



      cy.get('[data-qa="login-email"]').type(cred.email);
      cy.get('[data-qa="login-password"]').type(cred.password);
      cy.get('[data-qa="login-button"]').click();

      cy.contains('Logged in as').should("be.visible");
      cy.contains("Products").click();
      cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
      cy.contains("View Cart").click();

      cy.contains("Shopping Cart").should("be.visible");
      cy.get('#cart_items > :nth-child(1)').should("be.visible");
      cy.get('#product-1').should("be.visible");
      cy.get('#product-1 > .cart_description').should("be.visible");
      cy.get('#product-1 > .cart_price').should("be.visible");
      cy.get('#product-1 > .cart_quantity').should("be.visible");
      cy.get('#product-1 > .cart_total').should("be.visible");
      cy.get('.col-sm-6 > .btn').click();

      cy.get('#address_delivery').should("be.visible");
      cy.get('#address_delivery > .address_firstname').should("be.visible");
      cy.get('#address_delivery > :nth-child(4)').should("be.visible");
      cy.get('#address_delivery > .address_city').should("be.visible");
      cy.get('#address_delivery > .address_country_name').should("be.visible");
      cy.get('#address_delivery > .address_phone').should("be.visible");
      cy.get('#address_invoice').should("be.visible");
      cy.get('#address_invoice > .address_firstname').should("be.visible");
      cy.get('#address_invoice > :nth-child(4)').should("be.visible");
      cy.get('#address_invoice > .address_city').should("be.visible");
      cy.get('#address_invoice > .address_country_name').should("be.visible");
      cy.get('#address_invoice > .address_phone').should("be.visible");
      cy.get('.form-control').type('comentario sobre entrega')
      cy.get(':nth-child(7) > .btn').click()

      const numeroCartao = faker.finance.creditCardNumber();
      const cvc = faker.finance.creditCardCVV();
      const nome = faker.person.firstName();


      cy.get('[data-qa="name-on-card"]').type(nome);
      cy.get('[data-qa="card-number"]').type(numeroCartao);
      cy.get('[data-qa="cvc"]').type(cvc);
      cy.get('[data-qa="expiry-month"]').type('08');
      cy.get('[data-qa="expiry-year"]').type('2051')
      cy.get('[data-qa="pay-button"]').click()

      cy.get('.col-sm-9 > p').contains('Congratulations! Your order has been confirmed!').should('be.visible')



    });
  });
});