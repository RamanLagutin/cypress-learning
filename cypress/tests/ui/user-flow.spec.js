import { loginPage } from '../../pages/login.page';
import { mainPage } from '../../pages/main.page';
import { header } from '../../page_elements/header';
import { actionHeader } from '../../page_elements/action_header';
import { inboxPage } from '../../pages/inbox.page';
import { newEmailPage } from '../../pages/newEmail.page';
import { documentsPage } from '../../pages/documents.page';
import { trashPage } from '../../pages/trash.page';
import { moveToTrashModal } from '../../modals/move_to_trash.modal';

describe('User can perform user flow', function () {
  this.beforeEach(() => {
    cy.visit(Cypress.env('baseLink'));
  });

  it('should Log In, Attach file to email, send email, read it, and move documents to trash', function () {
    mainPage.clickOnLogin();
    loginPage.enterCredentials();
    loginPage.clickOnEnterButton();
    cy.location('pathname').should('equal', '/flatx/index.jsp');

    header.openInbox();
    actionHeader.clickOnNewButton();

    newEmailPage.sendEmailToMyself();
    newEmailPage.setSubject();
    newEmailPage.addAttachment();
    newEmailPage.sendEmail();

    inboxPage.waitNewEmail();
    inboxPage.clickOnReceivedEmail();
    inboxPage.checkEmailReceived();

    inboxPage.saveAttachedFile();
    header.openDocuments();
    documentsPage.checkDocument();

    documentsPage.moveDocumentToTrash();

    documentsPage.openTrash();
    trashPage.checkDocumentPresent();
  });

  this.afterAll(() => {
    header.openDocuments();
    actionHeader.clickOnRefreshButton();
    actionHeader.checkAll();
    actionHeader.clickOnMoreButton();
    actionHeader.clickOnDeleteOption();
    moveToTrashModal.clickOnYesButton();
  });
});
