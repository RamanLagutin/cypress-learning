export class ModalObjects {
  modalLocator = {
    yesButton: '#dialBtn_YES',
  };

  clickOnYesButton() {
    cy.get(this.modalLocator.yesButton).should('be.visible').click();
  }
}
