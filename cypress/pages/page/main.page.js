export class MainPage {
  mainLocator = {
    logInButton: '#signin',
  };

  clickOnLoginButton() {
    cy.get(this.mainLocator.logInButton).should('be.visible').click();
  }
}
