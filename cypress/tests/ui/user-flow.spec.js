import { loginPage } from '../../pages/login.page';
import { mainPage } from '../../pages/main.page';
import { inboxPage } from '../../pages/inbox.page';
import { newEmailPage } from '../../pages/newEmail.page';
import { documentsPage } from '../../pages/documents.page';
import { trashPage } from '../../pages/trash.page';
import { generateMailSubject } from '../../support/support';
import { basePage } from '../../pages/base.page';

describe('User can perform user flow', function () {
  let mailSubject = '';

  this.beforeEach(() => {
    mailSubject = generateMailSubject();
    cy.visit(Cypress.env('baseLink'));
  });

  it('should Log In, Attach file to email, send email, read it, and move documents to trash', function () {
    mainPage.clickOnLogin();
    loginPage.enterCredentials();
    loginPage.clickOnEnterButton();
    cy.location('pathname').should('equal', '/flatx/index.jsp');

    basePage.header.openInbox();
    inboxPage.clickOnNewEmailButton();
    newEmailPage.sendTestEmailToUser();
    newEmailPage.setSubject(mailSubject);
    newEmailPage.addAttachment();
    newEmailPage.sendEmail();

    inboxPage.waitNewEmail(mailSubject);
    inboxPage.clickOnReceivedEmail();
    inboxPage.checkEmailReceived(mailSubject);

    inboxPage.saveAttachedFile();
    basePage.header.openDocuments();
    documentsPage.checkDocument();

    documentsPage.moveDocumentToTrash();

    documentsPage.openTrash();
    trashPage.checkDocumentPresent();
  });

  this.afterAll(() => {
    basePage.header.openDocuments();
    basePage.actions.clickOnRefreshButton();
    basePage.actions.checkAll();
    basePage.actions.clickOnMoreButton();
    basePage.actions.clickOnDeleteOption();
    basePage.actions.clickOnYesButton();
  });
});
