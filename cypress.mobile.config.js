const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 844,
    viewportWidth: 390,
    baseUrl: 'http://localhost:3000',
  }
})