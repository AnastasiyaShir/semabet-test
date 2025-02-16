/// <reference types="cypress" />
import mainPage from '../../support/page-objects/main-page';
import registrationDialog from '../../support/page-objects/registration-dialog';

describe('Registration Tests', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  const NEW_PASS = 'pass123'

  context('Register with Non-Existing Number', () => {
    it('should register successfully with a new number', () => {
      
      cy.intercept('POST', '**/id/SignUp/user').as('signUpUser');

      mainPage.registerButton.click()

      const newNumber = '777' + Math.floor(1000000 + Math.random() * 9000000);

      registrationDialog.phoneNumberField.type(newNumber)
      registrationDialog.passwordField.type(NEW_PASS)
      registrationDialog.nextButton.click();

     
      cy.wait('@signUpUser').its('response.statusCode').should('eq', 200);
    });
  });

  context('Register with Existing Number', () => {
    it('should show error when registering with an existing number', () => {
      mainPage.registerButton.click()

      const mobile = Cypress.env('mobile')

      registrationDialog.phoneNumberField.type(mobile)
      registrationDialog.passwordField.type(NEW_PASS)
      registrationDialog.nextButton.click();
      registrationDialog.errorMessage.should('contain', 'This phone number already exists!');
      
    });
  });

});
