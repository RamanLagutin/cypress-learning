export const documentsLocator = {
  document: '[class="GCSDBRWBPJB"]',
  trash: '[id="doc_tree_trash"]',
};

export const documentsPage = {
  checkDocument: () => {
    cy.fixture('test-data').then((testData) => {
      cy.get(documentsLocator.document).first().should('be.visible');
    });
  },
  moveDocumentToTrash: () => {
    cy.fixture('test-data').then((testData) => {
      cy.get(documentsLocator.trash).should('be.visible');
      cy.then(() => {
        const trashCoords = Cypress.$(
          documentsLocator.trash
        )[0].getBoundingClientRect();
        cy.wrap(trashCoords).as('trashCoords');

        const documentCoords = Cypress.$(
          documentsLocator.document
        )[0].getBoundingClientRect();

        cy.wrap(documentCoords).as('documentCoords');
      });
      cy.then(() => {
        cy.get('@documentCoords').then((documentCoords) => {
          cy.get(documentsLocator.document)
            .first()
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
            cy.get(documentsLocator.trash)
              .trigger('mousemove', {
                force: true,
                clientX: trashCoords.x,
                clientY: trashCoords.y,
              })
              .trigger('mouseup', { force: true });
          });
        });
      });
    });
  },
  openTrash: () => {
    cy.get(documentsLocator.trash).click();
  },
};
