const fs = require('node:fs');
const path = require('path');
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        createTxtFile({ filename, content }) {
          const filePath = path.resolve('./cypress/fixtures', filename);
          fs.writeFileSync(filePath, content);
          return null;
        },
        deleteTxtFile({ filename }) {
          const filePath = path.resolve('./cypress/fixtures', filename);
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            return { success: true };
          }
          return { success: false, message: 'File not found' };
        },
      });
    },
    specPattern: 'cypress/tests/**/*.spec.{js,jsx,ts,tsx}',
  },
});
