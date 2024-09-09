const loginLocator = {
  username: '#UserID',
  password: '#Password',
  enterButton: '.btn',
};

export const loginPage = {
  enterCredentials: () => {
    cy.get(loginLocator.username).type(Cypress.env('username'));
    cy.get(loginLocator.password).type(Cypress.env('password'));
  },
  clickOnEnterButton: () => {
    cy.get(loginLocator.enterButton).click();
  },
};
