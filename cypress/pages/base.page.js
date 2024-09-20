export const baseLocator = {
  actions: {
    yesButton: '#dialBtn_YES',
    refreshButton: '[title="Refresh"]',
    checkAll: '[title="Select all"]',
    deleteButton: '[title="To Trash"]',
    moreButton: '[class="more"]',
    dropdownMenu: '[class="GCSDBRWBOQ menu"]',
  },
  header: {
    mailButton: '.icon24-Message',
    documentsButton: '.icon24-Documents',
  },
};

export const basePage = {
  actions: {
    clickOnYesButton: () => {
      cy.get(baseLocator.actions.yesButton).should('be.visible').click();
    },
    clickOnRefreshButton: () => {
      cy.get(baseLocator.actions.refreshButton)
        .should('be.visible')
        .click({ force: true });
      cy.wait(300);
    },
    checkAll: () => {
      cy.get(baseLocator.actions.checkAll).should('be.visible').click();
      cy.wait(400);
    },
    clickOnDeleteButton: () => {
      cy.get(baseLocator.actions.deleteButton).should('be.visible').click();
    },
    clickOnMoreButton: () => {
      cy.get(baseLocator.actions.moreButton).should('be.visible').click();
    },
    clickOnDeleteOption: () => {
      cy.get(baseLocator.actions.dropdownMenu)
        .should('be.visible')
        .within(() => {
          cy.contains('Delete').click();
        });
    },
  },
  header: {
    openInbox: () => {
      cy.get(baseLocator.header.mailButton).should('be.visible').click();
    },
    openDocuments: () => {
      cy.get(baseLocator.header.documentsButton).should('be.visible').click();
    },
  },
};
