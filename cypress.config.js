const { defineConfig } = require("cypress");

require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://semabet.ug',
    env: {
      codemobile: process.env.codemobile,
      mobile: process.env.mobile,
      password: process.env.password,
    },
  },
});
