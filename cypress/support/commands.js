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
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

Cypress.Commands.add('login', (user, pass) => {
  cy.get('#user-name').type(user);
  cy.get('[data-test="password"]').type(pass);
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add('selectProducts', () => {
  let numberOfProductsToAdd;
  cy.get('.inventory_item').then(($invItems) => {
    const maxProducts = $invItems.length;
    numberOfProductsToAdd = getRandomInt(maxProducts) + 1;
    for (let i = 0; i < numberOfProductsToAdd; i++) {
      cy.get('.btn').eq(i).click();
    }
  }).then(() => {
    return numberOfProductsToAdd;
  })
})

Cypress.Commands.add('fillCheckoutForm', (firstName, lastName, zipCode) => {
  cy.get('[data-test="firstName"]').type(firstName);
  cy.get('[data-test="lastName"]').type(lastName);
  cy.get('[data-test="postalCode"]').type(zipCode);
});

Cypress.Commands.add('validateProdTotal', () => {
  let sum = 0;
  cy.get('.inventory_item_price').then(($invItemPrice) => {

});
});