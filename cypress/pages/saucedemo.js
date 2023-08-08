const productDashboard = {
    secondaryHeader: '.header_secondary_container',
    sortDropDown: '[data-test="product_sort_container"]',
    productPrice: '.inventory_item_price',
    productName: '.inventory_item_name',
    removeSauceLabsBoldTshirt: '[id="remove-sauce-labs-bolt-t-shirt"]' ,
    

}

const cartLocators = {
    numberOfItemsInCart: '.shopping_cart_badge',
    cartButton: '.shopping_cart_container',
    checkoutButton: '[data-test="checkout"]',

}
const checkoutLocators = {
    firstName: '[data-test="firstName"]',
    lastName: '[data-test="lastName"]',
    postalCode: '[data-test="postalCode"]',
    checkoutFormSubmit: 'input[type="submit"]'
}

const checkoutSummaryLocators = {
    itemTotalPriceSummary: '.summary_subtotal_label',
    finishButton: '[data-test="finish"]',

}

const orderPlacedLocator = {
    sucessScreenContainer: '.checkout_complete_container',

}

const menuLocators = {
    menuButton: '[id="react-burger-menu-btn"]',
    logout: '[id="logout_sidebar_link"',

}

const loginScreenLocators = {
    errorContainer: '[data-test="error"]',
    errorTextLocked: 'Epic sadface: Sorry, this user has been locked out.'
}

export const sauceLocators = {
    ...checkoutLocators,
    ...checkoutSummaryLocators,
    ...productDashboard,
    ...loginScreenLocators,
    ...menuLocators,
    ...orderPlacedLocator,
    ...cartLocators
}