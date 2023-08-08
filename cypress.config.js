const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    credentials: {
      standardUser : {
        userName: 'standard_user',
        password: 'secret_sauce'
      },
      lockedUser: {
        userName: 'locked_out_user',
        password: 'secret_sauce'
      }
    },
    checkOut: {
      formDetails: {
        firstName: 'xyz',
        lastName: 'abc',
        postalCode: '500080'
      },
      pricingDetails: {
        cartSummaryPrice: '$95.97',
        firstItemPrice: '$49.99'
      }
    },
    url: 'https://saucedemo.com'
   
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


