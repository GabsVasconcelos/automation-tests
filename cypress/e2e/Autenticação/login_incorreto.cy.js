describe('Testes Automatizados com Cypress - Automation Exercise', () => {
    it("Login do usuário com e-mail e senha incorretos", () => {
        cy.visit("https://automationexercise.com/");
    
        cy.contains("Signup / Login").click();
        cy.get('.login-form > h2').should('be.visible');
        cy.get('[data-qa="login-email"]').type('testecase@email.com');
        cy.get('[data-qa="login-password"]').type('1234567');
        cy.get('[data-qa="login-button"]').click();
    
    
        cy.get('.login-form > form > p').contains("Your email or password is incorrect!").should("be.visible");
      });
    });