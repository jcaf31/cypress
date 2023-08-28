function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

describe('Shopping Cart', () => {

  let fixture;

  beforeEach(() => {
    cy.fixture('soucedemo.json').then((fixture_from_fixtures) => {
      fixture = fixture_from_fixtures;
    });
    cy.visit('http://www.saucedemo.com/')
  })
  it('Shopping cart - validate the number of items selected on products page is equal to the cart page', () => {

    let itemsSelected;

    cy.get("#user-name").type(fixture.user_name)
    cy.get('[data-test="password"]').type(fixture.password)
    cy.get('[data-test="login-button"]').click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    cy.get('.app_logo').contains('Swag Labs')
    cy.get('.title').contains('Products')
    cy.get('.inventory_item').then(($invItems) => {
      const countItems = $invItems.length;
      const numberOfItemsToAdd = getRandomInt(countItems) + 1;

      for (let i = 0; i<numberOfItemsToAdd; i++){
        cy.get('.btn').eq(i).click();
      }
      
      cy.get('.shopping_cart_badge').then(($badgeValue) => {
        itemsSelected = $badgeValue[0].innerText;
        expect(Number(itemsSelected)).to.equal(numberOfItemsToAdd, 'The number of items selected was not equal to the number of items displayed in cart badge');
      })
    })
  })
})