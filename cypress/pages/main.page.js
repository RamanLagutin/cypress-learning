const mainLocator = {
  logInButton: '#signin',
};

export const mainPage = {
  clickOnLogin: () => {
    cy.get(mainLocator.logInButton).click();
  },
};
