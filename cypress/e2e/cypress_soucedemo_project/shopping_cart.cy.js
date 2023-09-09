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
    let numberOfProductsToAdd;

    cy.login(fixture.userName, fixture.password);
    cy.url().should('eq', fixture.url + 'inventory.html');
    cy.get('.app_logo').contains(fixture.productsPage.pageTitle);
    cy.get('.title').contains(fixture.productsPage.pageSubTitle);
    cy.selectProducts().then(($numberOfProductsToAdd) => {
      numberOfProductsToAdd = $numberOfProductsToAdd;
    });
    cy.get('.shopping_cart_badge').then(($badgeValue) => {
      itemsBadgeSelected = $badgeValue[0].innerText;
      expect(Number(itemsBadgeSelected)).to.equal(numberOfProductsToAdd, 'The number of items selected were not equal to the number of items displayed in cart badge');
    })
    cy.get('#shopping_cart_container').click();
    cy.get('.cart_item').then(($invCartItems) => {
      const countCartItems = $invCartItems.length;
      expect(countCartItems).to.equal(Number(itemsBadgeSelected), 'The number of items displayed on cart page were not equal to the number of items displayed in cart badge');
    })
  })

  it.only('Checkout process', () => {

    let numberOfProductsToAdd;

    cy.login(fixture.userName, fixture.password);
    cy.url().should('eq', fixture.url + 'inventory.html');
    cy.selectProducts().then(($numberOfProductsToAdd) => {
      numberOfProductsToAdd = $numberOfProductsToAdd;
    });
  })

})