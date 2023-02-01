const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 900,
    viewportWidth: 1140,
    baseUrl: 'http://localhost:3000',
    user: {
      email: 'test@test.com', 
      password: 'test'
    },
    defaultCommandTimeout: 10000,
    retries: {
      runMode: 0,
      openMode: 1,
    },
  },
})