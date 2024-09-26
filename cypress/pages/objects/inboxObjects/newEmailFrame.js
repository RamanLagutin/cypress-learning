import { Utils } from '../../../support/helpers/utils/utils';

export class NewEmailFrame {
  constructor() {
    this.utils = new Utils();
  }

  newEmailLocator = {
    receiver: '#mailTo',
    subject: '#mailSubject',
    attachment: 'Attachment',
    attachmentInput: 'input[type=file]',
    sendButton: '#mailSend',
    fileUploadedIcon: '[class="checkIcon"]',
  };

  setEmailTo(emailRecipient) {
    cy.get(this.newEmailLocator.receiver)
      .should('be.visible')
      .type(emailRecipient);
  }

  setSubject(mailSubject) {
    cy.get(this.newEmailLocator.subject)
      .should('be.visible')
      .type(mailSubject, {
        force: true,
      });
  }

  addAttachment(fileName, fileContent) {
    this.utils.generateTxtFile(fileName, fileContent);

    cy.contains(this.newEmailLocator.attachment).should('be.visible').click();
    cy.get(this.newEmailLocator.attachmentInput).attachFile(fileName);

    this.utils.deleteTxtFile(fileName);
  }

  checkAttachmentIsUploaded() {
    cy.get(this.newEmailLocator.fileUploadedIcon).should('be.visible');
  }

  clickOnSendEmailButton() {
    cy.get(this.newEmailLocator.sendButton).should('be.visible').click();
  }
}
