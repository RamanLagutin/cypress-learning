import { faker } from '@faker-js/faker';

export function generateMailSubject() {
  return `Test ${faker.word.noun()}`;
}
