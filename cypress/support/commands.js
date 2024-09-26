import { MainPage, LoginPage, InboxPage, DocumentsPage } from '../pages';

Cypress.Commands.add('cleanEnvironment', () => {
  const mainPage = new MainPage();
  const loginPage = new LoginPage();
  const inboxPage = new InboxPage();
  const documentsPage = new DocumentsPage();

  const username = Cypress.env('defaultUser');
  const password = Cypress.env('defaultUserPassword');

  cy.visit(Cypress.env('mailFenceMainPage'));

  mainPage.clickOnLoginButton();
  loginPage.enterUserCredentials(username, password);
  loginPage.clickOnEnterButton();
  loginPage.CheckUserIsAuthorized();
  inboxPage.header.openDocuments();
  documentsPage.openTrashFolder();
  documentsPage.actionBar.clickOnRefreshButton(500);
  documentsPage.actionBar.selectAll();
  documentsPage.actionBar.clickOnMoreButton();
  documentsPage.actionBar.clickOnDeleteOptionIfEnabled();
  documentsPage.header.clickOnUser();
  documentsPage.header.chooseLogOutOption();
});
