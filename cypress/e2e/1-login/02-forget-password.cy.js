/// <reference types="cypress" />

import mainPage from '../../support/page-objects/main-page';
import loginDialog from '../../support/page-objects/login-dialog';
import forgetPassDialog from '../../support/page-objects/forget-pass-dialog';


describe('Forgot Password Tests', () => {

  const mobile = Cypress.env('mobile')

  beforeEach(() => {
    cy.visit('/')
  })

  context('SMS Sent on Password Reset Request', () => {
    it('should send SMS on reset password request and should show error for wrong reset code', () => {

      cy.intercept('POST', '**/id/Verification/getresetpasswordcode').as('resetPassword');

      mainPage.logginButton.click()

      loginDialog.forgotPasswordLink.click()
      forgetPassDialog.phoneNumberField.type(mobile)
      forgetPassDialog.resetButton.click()
      
      cy.wait('@resetPassword').its('response.statusCode').should('eq', 200);

      forgetPassDialog.digitField(0).type('0')
      forgetPassDialog.digitField(1).type('1')
      forgetPassDialog.digitField(2).type('2')
      forgetPassDialog.digitField(3).type('3')

      forgetPassDialog.errorMessage.should('have.text', 'Incorrect code, please check it!')

    });

  });

});
