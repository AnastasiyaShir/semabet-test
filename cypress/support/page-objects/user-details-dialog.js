class UserDetailsDialog {

  get accountSettingsTab() {
    return cy.contains('button', 'Account settings');
  }

  get currentPasswordField() {
    return cy.get('#currentPassword')
  }

  get newPasswordField() {
    return cy.get('#newPassword')
  }

  get changePasswordButton() {
    return cy.contains('p', 'Change password')
  }


}

export default new UserDetailsDialog();