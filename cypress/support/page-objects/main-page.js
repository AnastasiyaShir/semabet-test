class MainPage {

  get logginButton() {
    return cy.contains('button', 'Login');
  }

  get registerButton() {
    return cy.contains('button', 'Register');
  }

  get userIcon() {
    return cy.get('path[d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM12 3.6C14.04 3.6 15.6 5.16 15.6 7.2C15.6 9.24 14.04 10.8 12 10.8C9.96 10.8 8.4 9.24 8.4 7.2C8.4 5.16 9.96 3.6 12 3.6ZM12 20.64C9 20.64 6.36 19.08 4.8 16.8C4.8 14.4 9.6 13.08 12 13.08C14.4 13.08 19.2 14.4 19.2 16.8C17.64 19.08 15 20.64 12 20.64Z"]')
  }

  get logoutLink() {
    return cy.contains('p', 'Logout')
  }

  get detailsLink() {
    return cy.contains('p', 'Details')
  }

}

export default new MainPage();