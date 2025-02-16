/// <reference types="cypress" />

import mainPage from '../../support/page-objects/main-page';
import loginDialog from '../../support/page-objects/login-dialog';


// Test cases
// 1. login
//         - successful
//         - wrong password
// 2. forget password -  check if sms has sent or not
//         - check negative case of code input
// 3. try to reset password from user profile and set it back to Hello1234
// 4. test logout
// 5. test register with non existing and existing numbers.

describe('Login Tests', () => {

  const mobile = Cypress.env('mobile')
  const password = Cypress.env('password')

  beforeEach(() => {
    cy.visit('/')
  })

  context('Successful Login', () => {

    it('should log in successfully with correct credentials', () => {

      mainPage.logginButton.click();

      loginDialog.phoneNumberField.type(mobile);
      loginDialog.passwordField.type(password);
      loginDialog.submitButton.click()
    });

  });

  context('Login with wrong password', () => {

    it('should show error message for incorrect password', () => {
      mainPage.logginButton.click();

      loginDialog.phoneNumberField.type(mobile);
      loginDialog.passwordField.type("WRONG PASS");
      loginDialog.submitButton.click()

      loginDialog.errorMessage.should('have.text', 'Invalid login or password!');
    });
  });

});
