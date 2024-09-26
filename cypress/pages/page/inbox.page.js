import { InboxPageActionObjects } from '../objects/inboxObjects/actionObjects';
import { NewEmailFrame } from '../objects/inboxObjects/newEmailFrame';
import { BasePage } from './base.page';

export class InboxPage extends BasePage {
  constructor() {
    super();
    this.actionBar = new InboxPageActionObjects();
    this.newEmail = new NewEmailFrame();
  }

  inboxLocator = {
    mailList: '[id="gwt-uid-9"]',
    arrowDown: '[class="icon-Arrow-down"]',
    saveInDocuments: 'Save in Documents',
    myDocuments: '//*[@id="gwt-uid-68@540150623"]/div[1]/div[2]',
    saveButton: '[class="btn GCSDBRWBO defaultBtn"]',
  };

  waitForEmail(mailSubject) {
    const refreshTime = 500;

    cy.get(this.inboxLocator.mailList)
      .find('table')
      .children('tbody')
      .eq(1)
      .should('be.visible');

    cy.then(() => {
      let tries = 0;
      while (tries < 15) {
        let lastEmailSubject = Cypress.$(
          `${this.inboxLocator.mailList} table tbody`
        )[0].title;

        if (lastEmailSubject === mailSubject) {
          break;
        }
        this.actionBar.clickOnRefreshButton(refreshTime);
        tries++;
      }
    });
  }

  clickOnEmail(mailSubject) {
    cy.contains(mailSubject).click();
  }

  saveToDocumentsAttachedFile(fileName) {
    cy.contains(fileName).within((attachment) => {
      cy.get(this.inboxLocator.arrowDown).click({ force: true });
    });
    cy.contains(this.inboxLocator.saveInDocuments).click();
    cy.xpath(this.inboxLocator.myDocuments).click();
    cy.get(this.inboxLocator.saveButton).click();
  }
}
