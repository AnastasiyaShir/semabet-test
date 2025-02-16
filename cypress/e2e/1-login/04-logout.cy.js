/// <reference types="cypress" />

import mainPage from '../../support/page-objects/main-page'

describe('Logout Tests', () => {

  const mobile = Cypress.env('mobile')
  const password = Cypress.env('password')

  beforeEach(() => {
    cy.visit('/')
    cy.login(mobile, password);
  })

  context('Successful Logout', () => {
    it('should log out successfully', () => {
      mainPage.userIcon.click()
      mainPage.logoutLink.click()
      mainPage.userIcon.should('not.exist')
    });
  });
});
