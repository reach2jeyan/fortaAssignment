// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//



Cypress.Commands.add('login', (options) => { 
    cy.get('input[type=text]').type(options.userName)
    cy.get('input[type=password]').type(options.password)
    cy.get('input[type=submit]').click()

})
 
Cypress.Commands.add('addProducts', (numOfProducts) => {
    const actualProducts = numOfProducts - 1 // Ensure the products is always aligned with the array index starting with 0
    cy.get('.inventory_list').find('.btn_inventory').then(items => {
        // This takes the whole inventory list as parent and finds the add to cart button within the inventory list
      for(let product=actualProducts ; product>=0 ; product--){
        // This accepts the number of products we want to add and based on it iterates and adds products to cart using index
          items[product].click()
      }
    
})
})
 

Cypress.Commands.add('checkout', (options) => {
    cy.get('[data-test="firstName"]').type(options.firstName)
    cy.get('[data-test="lastName"]').type(options.lastName)
    cy.get('[data-test="postalCode"]').type(options.postalCode)
    cy.get('input[type="submit"]').click()
})



