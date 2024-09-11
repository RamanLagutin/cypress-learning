const actionHeaderLocator = {
  newButton: '#mailNewBtn',
  checkAll: '[title="Select all"]',
  deleteButton: '[title="To Trash"]',
  moreButton: '[class="more"]',
  dropdownMenu: '[class="GCSDBRWBOQ menu"]',
};

export const actionHeader = {
  clickOnNewButton: () => {
    cy.get(actionHeaderLocator.newButton).click();
  },
  checkAll: () => {
    cy.get(actionHeaderLocator.checkAll).click();
  },
  clickOnDeleteButton: () => {
    cy.get(actionHeaderLocator.deleteButton).click();
  },
  clickOnMoreButton: () => {
    cy.get(actionHeaderLocator.moreButton).click();
  },
  clickOnDeleteOption: () => {
    cy.get(actionHeaderLocator.dropdownMenu).within(() => {
      cy.contains('Delete').click();
    });
  },
};
