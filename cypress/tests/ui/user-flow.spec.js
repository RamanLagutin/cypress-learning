import { loginPage } from '../../pages/login.page';
import { mainPage } from '../../pages/main.page';
import { header } from '../../pages/header';
import { inboxPage } from '../../pages/inbox.page';
import { newEmailPage } from '../../pages/newEmail.page';

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
    inboxPage.clickOnNewButton();

    newEmailPage.sendEmailToMyself();
    newEmailPage.setSubject();
    newEmailPage.addAttachment();
    newEmailPage.sendEmail();

    inboxPage.waitNewEmail();
    inboxPage.clickOnReceivedEmail();
    inboxPage.checkEmailReceived();

    inboxPage.saveAttachedFile();
  });
});
