import { Utils } from '../../support/helpers/utils/utils';
import { MainPage, LoginPage, InboxPage, DocumentsPage } from '../../pages';

const utils = new Utils();
const mainPage = new MainPage();
const loginPage = new LoginPage();
const inboxPage = new InboxPage();
const documentsPage = new DocumentsPage();

describe('User can perform user flow', function () {
  let mailSubject = '';

  this.beforeAll(() => {
    cy.cleanEnvironment();
  });

  this.beforeEach(() => {
    mailSubject = utils.generateMailSubject();
    cy.visit(Cypress.env('mailFenceMainPage'));
  });

  it('should Log In, Attach file to email, send email, read it, and move documents to trash', function () {
    const username = Cypress.env('defaultUser');
    const password = Cypress.env('defaultUserPassword');
    const emailRecipient = Cypress.env('defaultUserEmail');
    const fileName = mailSubject + '.txt';

    mainPage.clickOnLoginButton();
    loginPage.enterUserCredentials(username, password);
    loginPage.clickOnEnterButton();
    loginPage.CheckUserIsAuthorized();

    inboxPage.actionBar.clickOnNewEmailButton();
    inboxPage.newEmail.setEmailTo(emailRecipient);
    inboxPage.newEmail.setSubject(mailSubject);
    inboxPage.newEmail.addAttachment(fileName);
    inboxPage.newEmail.checkAttachmentIsUploaded();
    inboxPage.newEmail.clickOnSendEmailButton();

    inboxPage.waitForEmail(mailSubject);

    inboxPage.clickOnEmail(mailSubject);

    inboxPage.saveToDocumentsAttachedFile(fileName);

    inboxPage.header.openDocuments();
    documentsPage.checkDocumentIsDisplayed(fileName);

    documentsPage.moveDocumentToTrash(fileName);
    documentsPage.openTrashFolder();
    documentsPage.checkDocumentIsDisplayed(fileName);
  });
});
