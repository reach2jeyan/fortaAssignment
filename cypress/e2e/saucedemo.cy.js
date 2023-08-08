import { sauceLocators } from "../pages/saucedemo"
describe('Sauce labs work flow', () => {
    const { cartSummaryPrice, firstItemPrice } = Cypress.env('checkOut')['pricingDetails']
    it('validates the sauce labs check out flow and locked user', () => {
      cy.visit(Cypress.env('url'), {timeout: 3000})
      cy.login(Cypress.env('credentials')['standardUser'])
      cy.get(sauceLocators.secondaryHeader).contains('Products')
      cy.get(sauceLocators.sortDropDown).select("hilo")
      cy.get(sauceLocators.productPrice).first().should('have.text', firstItemPrice)
      cy.get(sauceLocators.productName).last().should('have.text', 'Sauce Labs Onesie')
      cy.addProducts(4)
      cy.get(sauceLocators.removeSauceLabsBoldTshirt).click()
      cy.get(sauceLocators.numberOfItemsInCart).should('have.text',3)
      cy.get(sauceLocators.cartButton).click()
      cy.get(sauceLocators.checkoutButton).click()
      cy.checkout(Cypress.env('checkOut')['formDetails'])
      cy.get(sauceLocators.itemTotalPriceSummary).contains(cartSummaryPrice)
      cy.get(sauceLocators.finishButton).click()
      cy.get(sauceLocators.sucessScreenContainer)
      cy.get(sauceLocators.menuButton).click()
      cy.get(sauceLocators.logout).click()
      cy.login(Cypress.env('credentials')['lockedUser'])
      cy.get(sauceLocators.errorContainer).should('have.text',sauceLocators.errorTextLocked)
      
})
    })
