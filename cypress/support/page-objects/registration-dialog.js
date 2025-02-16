class RegistrationDialog {

    get phoneNumberField() {
      return cy.get('div[role="dialog"]').find('#phoneNumberField');
    }

    get passwordField() {
      return cy.get('div[role="dialog"]').find('#passwordField');
    }
  
    get nextButton() {
      return cy.contains('button', 'Next');
    }

    get errorMessage() {
      return cy.get('div[role="dialog"]').find('label[for="phoneNumberField"] + p');
    }

    
  }
  
  export default new RegistrationDialog();