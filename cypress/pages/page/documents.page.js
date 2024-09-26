import { BasePage } from './base.page';

export class DocumentsPage extends BasePage {
  documentsLocator = {
    documentsList: '[class="GCSDBRWBPJB"]',
    trash: '[id="doc_tree_trash"]',
  };

  checkDocumentsListIsDisplayed() {
    cy.get(this.documentsLocator.documentsList).should('be.visible');
  }

  checkDocumentIsDisplayed(fileName) {
    cy.get(this.documentsLocator.documentsList)
      .should('be.visible')
      .wrap()
      .as('documents');
    cy.get('@documents').contains(fileName).should('be.visible');
  }

  moveDocumentToTrash(fileName) {
    cy.get(this.documentsLocator.trash).should('be.visible');
    cy.then(() => {
      const trashCoords = Cypress.$(
        this.documentsLocator.trash
      )[0].getBoundingClientRect();
      cy.wrap(trashCoords).as('trashCoords');

      const documentCoords = Cypress.$(
        this.documentsLocator.documentsList
      )[0].getBoundingClientRect();

      cy.wrap(documentCoords).as('documentCoords');
    });
    cy.then(() => {
      cy.get('@documentCoords').then((documentCoords) => {
        cy.get(this.documentsLocator.documentsList).wrap().as('documents');
        cy.get('@documents')
          .contains(fileName)
          .trigger('mousedown', {
            force: true,
            clientX: documentCoords.x,
            clientY: documentCoords.y,
          })
          .trigger('mousemove', {
            force: true,
            clientX: documentCoords.x - 5,
            clientY: documentCoords.y - 5,
          });
        cy.get('@trashCoords').then((trashCoords) => {
          cy.get(this.documentsLocator.trash)
            .trigger('mousemove', {
              force: true,
              clientX: trashCoords.x,
              clientY: trashCoords.y,
            })
            .trigger('mouseup', { force: true });
        });
      });
    });
  }

  openTrashFolder() {
    cy.get(this.documentsLocator.trash).click();
  }
}
