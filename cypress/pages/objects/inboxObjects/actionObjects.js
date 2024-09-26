import { ActionObjects } from '../commonObjects/actionObjects';

export class InboxPageActionObjects extends ActionObjects {
  actionsLocator = {
    ...this.actionsLocator,
    newEmailButton: '#mailNewBtn',
  };

  clickOnNewEmailButton() {
    cy.get(this.actionsLocator.newEmailButton).should('be.visible').click();
  }
}
