function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

describe('Shopping Cart', () => {

  let fixture;

  beforeEach(() => {
    cy.fixture('soucedemo.json').then((fixture_from_fixtures) => {
      fixture = fixture_from_fixtures;
      cy.visit(fixture.url);
    });
  })
  it('Shopping cart - validate the number of items selected on products page is equal to the cart page', () => {

    let itemsBadgeSelected;
    let numberOfItemsToAdd;
    cy.get("#user-name").type(fixture.userName);
    cy.get('[data-test="password"]').type(fixture.password);
    cy.get('[data-test="login-button"]').click();
    cy.url().should('eq', fixture.url + 'inventory.html');
    cy.get('.app_logo').contains(fixture.productsPage.pageTitle);
    cy.get('.title').contains(fixture.productsPage.pageSubTitle);
    cy.get('.inventory_item').then(($invItems) => {
      const countItems = $invItems.length;
      numberOfItemsToAdd = getRandomInt(countItems) + 1;
      for (let i = 0; i<numberOfItemsToAdd; i++){
        cy.get('.btn').eq(i).click();
      }
    })
    cy.get('.shopping_cart_badge').then(($badgeValue) => {
      itemsBadgeSelected = $badgeValue[0].innerText;
      expect(Number(itemsBadgeSelected)).to.equal(numberOfItemsToAdd, 'The number of items selected were not equal to the number of items displayed in cart badge');
    })
    cy.get('#shopping_cart_container').click();
    cy.get('.cart_item').then(($invCartItems) => {
      const countCartItems = $invCartItems.length;
      expect(countCartItems).to.equal(Number(itemsBadgeSelected), 'The number of items displayed on cart page were not equal to the number of items displayed in cart badge');
    })
  })
})