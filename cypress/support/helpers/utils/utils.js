import { faker } from '@faker-js/faker';

export class Utils {
  crypto = require('crypto');

  generateMailSubject() {
    return `Test ${faker.number.bigInt()}`;
  }

  generateTxtFile(name, content) {
    content = content || faker.lorem.paragraph(256);
    console.log(content);
    cy.task('createTxtFile', {
      filename: name,
      content: content,
    });
  }

  deleteTxtFile(name) {
    cy.task('deleteTxtFile', {
      filename: name,
    });
  }
}
