import { faker } from '@faker-js/faker';

describe('Testes Automatizados com Cypress - Automation Exercise', () => {

  it("verificar detalhes do endereço na página de checkout", () => {

    const nome = faker.person.firstName();
    const email = faker.internet.email();
    const senha = faker.internet.password();
    const sobrenome = faker.person.lastName();
    const endereco = faker.location.streetAddress();
    const cidade = faker.location.city();
    const estado = faker.location.state();
    const cep = faker.location.zipCode();
    const telefone = faker.phone.number();

    cy.visit("https://automationexercise.com/");

    cy.contains("Signup / Login").click();
    cy.get('.signup-form > h2').should('be.visible');
    cy.get('[data-qa="signup-name"]').type(nome);
    cy.get('[data-qa="signup-email"]').type(email);

    cy.get('[data-qa="signup-button"]').click();

    cy.get('#id_gender2').click();
    cy.get('[data-qa="password"]').type(senha);
    cy.get('[data-qa="days"]').select("15");
    cy.get('[data-qa="months"]').select("August");
    cy.get('[data-qa="years"]').select("1996");
    cy.get('[data-qa="first_name"]').type(nome);
    cy.get('[data-qa="last_name"]').type(sobrenome);
    cy.get('[data-qa="address"]').type(endereco);
    cy.get('[data-qa="city"]').type(cidade);
    cy.get('[data-qa="country"]').select('Canada')
    cy.get('[data-qa="state"]').type(estado);
    cy.get('[data-qa="zipcode"]').type(cep);
    cy.get('[data-qa="mobile_number"]').type(telefone);

    Cypress.env("userData", { nome, sobrenome, email, senha, endereco, cidade, estado, cep, telefone });

    cy.get('[data-qa="create-account"]').click();

    cy.contains("Account Created!").should("be.visible");
    cy.get('[data-qa="continue-button"]').click();
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
    const userData = Cypress.env("userData");

    cy.get('#address_delivery').should("be.visible");
    cy.get('#address_delivery > .address_firstname').invoke('text').then((text) => {
      expect(text.trim()).contains(userData.nome);
    });
    cy.get('#address_delivery > :nth-child(4)').invoke('text').then((text) => {
      expect(text.trim()).to.eq(userData.endereco);
    });
    cy.get('#address_delivery > .address_city').invoke('text').then((text) => {
      expect(text.trim()).contains(userData.cidade);
    });
    cy.get('#address_delivery > .address_country_name').invoke('text').then((text) => {
      expect(text.trim()).to.eq('Canada');
    });
    cy.get('#address_delivery > .address_phone').invoke('text').then((text) => {
      expect(text.trim()).to.eq(telefone);
    });
    cy.get('.form-control').type('comentario sobre entrega')
    cy.get(':nth-child(7) > .btn').click()

    const numeroCartao = faker.finance.creditCardNumber();
    const cvc = faker.finance.creditCardCVV();


    cy.get('[data-qa="name-on-card"]').type(nome);
    cy.get('[data-qa="card-number"]').type(numeroCartao);
    cy.get('[data-qa="cvc"]').type(cvc);
    cy.get('[data-qa="expiry-month"]').type('08');
    cy.get('[data-qa="expiry-year"]').type('2051')
    cy.get('[data-qa="pay-button"]').click()

    cy.get('.col-sm-9 > p').contains('Congratulations! Your order has been confirmed!').should('be.visible')

    cy.contains('Delete Account').click()
    cy.get('[data-qa="continue-button"]').click()

  });
});