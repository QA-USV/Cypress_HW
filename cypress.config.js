const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    user: {
      email: 'test@test.com', 
      password: 'test'
    },
    defaultCommandTimeout: 10000,
    env: {
      mobile: { 
        browsers: [
          {
            name: 'chrome',
            family: 'chromium',
            channel: 'stable',
            displayName: 'Chrome',
            version: '',
            minSupportedVersion: 64,
            majorVersion: '',
          },
        ],
        viewport: {
          viewportHeight: 844,
          viewportWidth: 390
        },
        retries: {
          runMode: 0,
          openMode: 1,
        },
      },
      laptop: {
        browsers: [
          {
            name: 'chrome',
            family: 'chromium',
            channel: 'stable',
            displayName: 'Chrome',
            version: '',
            minSupportedVersion: 64,
            majorVersion: '',
          },
          {
            name: 'edge',
            family: 'chromium',
            channel: 'stable',
            displayName: 'Edge',
            version: '',
            minSupportedVersion: 79,
            majorVersion: '',
          },
        ],
        viewport: {
          viewportHeight: 900,
          viewportWidth: 1440
        },
        retries: {
          runMode: 0,
          openMode: 2,
        },
      },
    },    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})