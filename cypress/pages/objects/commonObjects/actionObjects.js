import { ModalObjects } from './modalObjects';

export class ActionObjects extends ModalObjects {
  actionsLocator = {
    refreshButton: '[title="Refresh"]',
    checkAll: '[title="Select all"]',
    deleteButton: '[title="To Trash"]',
    moreButton: '[class="more"]',
    dropdownMenu: '[class="GCSDBRWBOQ menu"]',
  };

  clickOnRefreshButton(timeOut) {
    timeOut = timeOut || 0;
    cy.get(this.actionsLocator.refreshButton)
      .should('be.visible')
      .click({ force: true });
    cy.wait(timeOut);
  }

  selectAll() {
    cy.get(this.actionsLocator.checkAll).should('be.visible').click();
    cy.wait(500);
  }

  clickOnDeleteButton() {
    cy.get(this.actionsLocator.deleteButton).should('be.visible').click();
  }

  clickOnMoreButton() {
    cy.get(this.actionsLocator.moreButton).should('be.visible').click();
  }

  clickOnDeleteOption() {
    cy.get(this.actionsLocator.dropdownMenu)
      .should('be.visible')
      .within(() => {
        cy.contains('Delete').click();
      });
  }

  clickOnDeleteOptionIfEnabled() {
    cy.get(this.actionsLocator.dropdownMenu)
      .should('be.visible')
      .within(() => {
        cy.contains('Delete').then((deleteButton) => {
          cy.wrap(deleteButton).as('deleteButton');
        });
      });
    cy.get('@deleteButton').then((deleteButton) => {
      if (!deleteButton.hasClass('GCSDBRWBMB')) {
        cy.contains('Delete').click();
        this.clickOnYesButton();
      }
    });
  }
}
