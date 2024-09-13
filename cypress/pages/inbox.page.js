import { actionHeader } from '../page_elements/action_header';

const inboxLocator = {
  mailList: '[id="gwt-uid-9"]',
  lastMail: "(//*[@class='listSubject'])[1]",
  arrowDown: '[class="icon-Arrow-down"]',
  saveInDocuments: 'Save in Documents',
  myDocuments: '//*[@id="gwt-uid-68@540150623"]/div[1]/div[2]',
  saveButton: '[class="btn GCSDBRWBO defaultBtn"]',
};

export const inboxPage = {
  waitNewEmail: () => {
    cy.get(inboxLocator.mailList)
      .find('table')
      .children('tbody')
      .eq(1)
      .should('be.visible');

    cy.then(() => {
      const amountOfEmails = Cypress.$(
        `${inboxLocator.mailList} table tbody:nth-child(3)`
      )[0].childNodes.length;
      cy.wrap(amountOfEmails).as('amountOfEmails');
    });

    cy.get('@amountOfEmails').then((currentAmountOfEmails) => {
      let tries = 0;
      while (tries < 15) {
        let newAmountOfEmails = Cypress.$(
          `${inboxLocator.mailList} table tbody:nth-child(3)`
        )[0].childNodes.length;
        if (newAmountOfEmails > currentAmountOfEmails) {
          i = 15;
          return;
        }
        actionHeader.clickOnRefreshButton();
        tries++;
      }
    });
  },
  clickOnReceivedEmail: () => {
    cy.xpath(inboxLocator.lastMail).click();
  },
  checkEmailReceived: () => {
    cy.fixture('test-data').then((testData) => {
      cy.xpath(`//span[text()='${testData.test_email_subject}']`).should(
        'exist'
      );
    });
  },
  saveAttachedFile: () => {
    cy.fixture('test-data').then((testData) => {
      cy.contains(testData.file_name).within((attachment) => {
        cy.get(inboxLocator.arrowDown).click({ force: true });
      });
      cy.contains(inboxLocator.saveInDocuments).click();
      cy.xpath(inboxLocator.myDocuments).click();
      cy.get(inboxLocator.saveButton).click();
    });
  },
};
