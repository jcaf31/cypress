function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
describe('Shopping Cart', () => {
  let fixture;
  let countItems;
  let randomNumber;
  beforeEach(() => {
    cy.fixture('soucedemo.json').then((fixture_from_fixtures) => {
      fixture = fixture_from_fixtures;
    });
    cy.visit('http://www.saucedemo.com/')
  })
  it('Shopping cart - validate the number of items selected on products page is equal to the cart page', () => {
    cy.get("#user-name").type(fixture.user_name)
    cy.get('[data-test="password"]').type(fixture.password)
    cy.get('[data-test="login-button"]').click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    cy.get('.app_logo').contains('Swag Labs')
    cy.get('.title').contains('Products')
    cy.get('.inventory_item').then(($numberOfItems) => {
      countItems = $numberOfItems.length;
      randomNumber = getRandomInt(countItems);
      console.log(randomNumber);
    })
  })
})