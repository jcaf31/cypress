describe('validate inventory', () => {

  beforeEach(() => {
    cy.visit('http://www.saucedemo.com/')
    cy.get("#user-name").type(fixture.user_name)
    cy.get('[data-test="password"]').type(fixture.password)
    cy.get('[data-test="login-button"]').click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
  })

  it('Validating each item', () => {

    let priceRegEx = new RegExp('^\\$[\\d]+\\.[\\d]{2}'); //This RegExp validates the articles price

    //Item #1
    cy.get('#item_4_img_link img').invoke('attr', 'src').should('match', new RegExp('.jpg$')); 
    cy.get('.inventory_item_price').eq(0).then(($element) => {
      expect($element.text()).to.match(priceRegEx);
    })
    cy.get('.inventory_item_desc').eq(0).invoke('text').should('match', new RegExp('^.{5,}$'));
    cy.get('#item_4_title_link .inventory_item_name').should('contain', 'Sauce Labs Backpack')
    cy.get('#add-to-cart-sauce-labs-backpack').should('exist')

    //Item #2
    cy.get('#item_0_img_link img').invoke('attr', 'src').should('match', new RegExp('.jpg$')); 
    cy.get('.inventory_item_price').eq(1).then(($element) => {
      expect($element.text()).to.match(priceRegEx);
    })
    cy.get('.inventory_item_desc').eq(1).invoke('text').should('match', new RegExp('^.{5,}$'));
    cy.get('#item_0_title_link .inventory_item_name').should('contain', 'Sauce Labs Bike Light')
    cy.get('#add-to-cart-sauce-labs-bike-light').should('exist')

    //Item #3
    cy.get('#item_1_img_link img').invoke('attr', 'src').should('match', new RegExp('.jpg$')); 
    cy.get('.inventory_item_price').eq(2).then (($element) => {
      expect($element.text()).to.match(priceRegEx);
    })
    cy.get('.inventory_item_desc').eq(2).invoke('text').should('match', new RegExp('^.{5,}$'));
    cy.get('#item_1_title_link .inventory_item_name').should('contain', 'Sauce Labs Bolt T-Shirt')
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').should('exist')

    //Item #4
    cy.get('#item_5_img_link img').invoke('attr', 'src').should('match', new RegExp('.jpg$')); 
    cy.get('.inventory_item_price').eq(3).then (($element) => {
      expect($element.text()).to.match(priceRegEx);
    })
    cy.get('.inventory_item_desc').eq(3).invoke('text').should('match', new RegExp('^.{5,}$'));
    cy.get('#item_5_title_link .inventory_item_name').should('contain', 'Sauce Labs Fleece Jacket')
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').should('exist')

    //Item #5
    cy.get('#item_2_img_link img').invoke('attr', 'src').should('match', new RegExp('.jpg$'));  
    cy.get('.inventory_item_price').eq(4).then (($element) => {
      expect($element.text()).to.match(priceRegEx);
    })
    cy.get('.inventory_item_desc').eq(4).invoke('text').should('match', new RegExp('^.{5,}$'));
    cy.get('#item_2_title_link .inventory_item_name').should('contain', 'Sauce Labs Onesie')
    cy.get('#add-to-cart-sauce-labs-onesie').should('exist')

    //Item #6
    cy.get('#item_3_img_link img').invoke('attr', 'src').should('match', new RegExp('.jpg$')); 
    cy.get('.inventory_item_price').eq(5).then (($element) => {
      expect($element.text()).to.match(priceRegEx);
    })
    cy.get('.inventory_item_desc').eq(5).invoke('text').should('match', new RegExp('^.{5,}$'));
    cy.get('#item_3_title_link .inventory_item_name').should('contain', 'Test.allTheThings() T-Shirt (Red)')
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').should('exist')
  })

})

