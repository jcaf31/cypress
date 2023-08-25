describe('validate inventory', () => {
  let fixture;
  let countItems;
  beforeEach(() => {
    cy.fixture('soucedemo.json').then((fixture_from_fixtures) => {
      fixture = fixture_from_fixtures;
    });
  })
  it('Validate all products contain expected information', () => {
    let priceRegEx = new RegExp('^\\$[\\d]+\\.[\\d]{2}'); 
    cy.visit('http://www.saucedemo.com/');
    cy.get("#user-name").type(fixture.user_name);
    cy.get('[data-test="password"]').type(fixture.password);
    cy.get('[data-test="login-button"]').click();
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    cy.get('.inventory_item').then(($numberOfItems) => {
      countItems = $numberOfItems.length;
      for(let i=0; i<countItems; i++){
        cy.get('.inventory_item_img a img').eq(i).invoke('attr', 'src').should('match', new RegExp('.jpg$'));
        cy.get('.inventory_item_price').eq(i).then(($element) => {
          expect($element.text()).to.match(priceRegEx);
        })
        cy.get('.inventory_item_desc').eq(i).invoke('text').should('match', new RegExp('^.{5,}$'));
        cy.get('.inventory_item_name').eq(i).invoke('text').should('match', new RegExp('^[A-Z][a-z]+(\\s[A-Z](-[A-Z])?[a-z]+)+$'));
        cy.get('.btn').eq(i).should('exist');
    }
    })
  })
})

