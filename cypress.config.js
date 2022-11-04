const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  viewportWidth: 1440,
  viewportHeight: 900,

  e2e: {
    // baseurl: "https://process.env.STAFF_LOGIN:process.env.STAFF_PASSWORDwww-dev.esanum.de",
    baseUrl: "https://www.esanum.de"

    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    //   return require('./cypress/plugins/index')(on, config)
    // },
  },
});
