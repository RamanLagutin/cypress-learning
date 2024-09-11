import { documentsLocator } from './documents.page';

const trashLocator = {};

export const trashPage = {
  checkDocumentPresent: () => {
    cy.fixture('test-data').then((testData) => {
      cy.get(documentsLocator.document)
        .first()
        .should('be.visible')
        .and('have.text', `»${testData.file_name}`);
    });
  },
};
