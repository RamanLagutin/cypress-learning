const moveToTrashLocator = {
  yesButton: '#dialBtn_YES',
};

export const moveToTrashModal = {
  clickOnYesButton: () => {
    cy.get(moveToTrashLocator.yesButton).click();
  },
};
