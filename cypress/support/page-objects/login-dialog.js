class LoginDialog {

    get phoneNumberField() {
      return cy.get('div[role="dialog"]').find('input[name="phoneNumberField"]');
    }
  
    get passwordField() {
      return cy.get('div[role="dialog"]').find('input[name="passwordField"]');
    }
  
    get submitButton() {
      return cy.get('div[role="dialog"]').find('div button[type="submit"]');
    }
  
    get errorMessage() {
      return cy.get('div[role="dialog"]').find('label[for="phoneNumberField"] + p');
    }

    get forgotPasswordLink() {
      return cy.contains('p', 'Forgot Password?');
    }
  
    
  }
  
  export default new LoginDialog();