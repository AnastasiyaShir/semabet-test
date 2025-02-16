class ForgetPassDialog {

    get phoneNumberField() {
      return cy.get('div[role="dialog"]').find('#phoneNumberField')
    }

    get resetButton() {
      return cy.get('div[role="dialog"]').contains('button', 'Reset')
    }

    get errorMessage() {
      return cy.get('div[role="dialog"]').find('#0').parent().parent().find('p');
    }

    digitField(index) {
      return cy.get('div[role="dialog"]').find('#' + index);
    }
    
    
  }
  
  export default new ForgetPassDialog();