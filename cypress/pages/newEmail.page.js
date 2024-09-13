const newEmailLocator = {
  receiver: '#mailTo',
  subject: '#mailSubject',
  attachment: 'Attachment',
  attachmentInput: 'input[type=file]',
  sendButton: '#mailSend',
  fileUploadedIcon: '[class="checkIcon"]',
};

export const newEmailPage = {
  sendEmailToMyself: () => {
    cy.get(newEmailLocator.receiver).type(Cypress.env('email'));
  },
  setSubject: () => {
    cy.fixture('test-data').then((testData) => {
      cy.get(newEmailLocator.subject).type(testData.test_email_subject, {
        force: true,
      });
    });
  },
  addAttachment: () => {
    cy.fixture('test-data').then((testData) => {
      cy.task('createTxtFile', {
        filename: testData.file_name,
        content: testData.file_content,
      });

      cy.contains('a', newEmailLocator.attachment).click();
      cy.get(newEmailLocator.attachmentInput).attachFile(testData.file_name);
      cy.get(newEmailLocator.fileUploadedIcon).should('be.visible');

      cy.task('deleteTxtFile', {
        filename: testData.file_name,
        content: testData.file_content,
      });
    });
  },
  sendEmail: () => {
    cy.get(newEmailLocator.sendButton).click();
  },
};
