/// <reference types="cypress" />

import mainPage from "../../support/page-objects/main-page";
import userDetailsDialog from "../../support/page-objects/user-details-dialog";

describe('User Profile Password Reset', () => {
  const mobile = Cypress.env('mobile')
  const password = Cypress.env('password')

  beforeEach(() => {
    cy.visit('/')
    cy.login(mobile, password);
  })

  context('Reset Password from User Profile', () => {
    it('should reset the password to Hello1234', () => {

      cy.intercept('POST', '**/id/User/changePassword').as('changePassword');

      mainPage.userIcon.click()
      mainPage.detailsLink.click()

      userDetailsDialog.accountSettingsTab.click()
      userDetailsDialog.currentPasswordField.type(password)
      userDetailsDialog.newPasswordField.type(password)
      userDetailsDialog.changePasswordButton.click();

      cy.wait('@changePassword').its('response.statusCode').should('eq', 200);

    });
  });
});
