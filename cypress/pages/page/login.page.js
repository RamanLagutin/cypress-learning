export class LoginPage {
  loginLocator = {
    username: '#UserID',
    password: '#Password',
    enterButton: '.btn',
  };

  enterUserCredentials(username, password) {
    cy.get(this.loginLocator.username).type(username);
    cy.get(this.loginLocator.password).type(password);
  }

  clickOnEnterButton() {
    cy.get(this.loginLocator.enterButton).click();
  }

  CheckUserIsAuthorized() {
    cy.location('pathname').should('equal', '/flatx/index.jsp');
  }
}
