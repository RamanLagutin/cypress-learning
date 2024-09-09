const documentsLocator = {
  logInButton: '#signin',
};

export const documentsPage = {
  clickOnLogin: () => {
    cy.get(mainLocator.logInButton).click();
  },
};
