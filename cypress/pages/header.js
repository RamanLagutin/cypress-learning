const headerLocator = {
  mailButton: '.icon24-Message',
  documentsButton: '.icon24-Documents',
};

export const header = {
  openInbox: () => {
    cy.get(headerLocator.mailButton).click();
  },
  openDocuments: () => {
    cy.get(headerLocator.documentsButton).click();
  },
};
