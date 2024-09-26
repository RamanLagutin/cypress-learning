export class HeaderObjects {
  headerLocator = {
    mailButton: '.icon24-Message',
    documentsButton: '.icon24-Documents',
    userIcon: "[class='GCSDBRWBAE icon-Arrow-down']",
    logOutOption: 'Log out',
  };

  openInbox() {
    cy.get(this.headerLocator.mailButton).should('be.visible').click();
  }

  openDocuments() {
    cy.get(this.headerLocator.documentsButton).should('be.visible').click();
  }

  clickOnUser() {
    cy.get(this.headerLocator.userIcon).click();
  }

  chooseLogOutOption() {
    cy.contains(this.headerLocator.logOutOption).should('be.visible').click();
  }
}
