const inboxLocator = {
  newButton: '#mailNewBtn',
  refreshButton: '[title="Refresh"]',
  mailList: '#mailList',
  lastMail: "(//*[@class='listSubject'])[1]",
  arrowDown: '[class="icon-Arrow-down"]',
};

export const inboxPage = {
  clickOnNewButton: () => {
    cy.get(inboxLocator.newButton).click();
  },
  waitNewEmail: () => {
    cy.wait(5555);
    cy.get(inboxLocator.refreshButton).click();

    // cy.get('[id="gwt-uid-9"]')
    //   .find('table')
    //   .children('tbody')
    //   .eq(1)
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
        cy.get('');
      });
    });
  },
};
