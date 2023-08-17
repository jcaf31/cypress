describe('Validate Inventory', () => {

  beforeEach(() => {
    cy.visit('http://www.saucedemo.com/')
    cy.get("#user-name").type("standard_user")
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
  })

  it('Validating each item', () => {
    //Item #1
    cy.get('#item_4_img_link img').invoke('attr', 'src').should('contain', '.jpg')
    cy.get('.pricebar').eq(0).should('contain', '$')
    cy.get('.inventory_item_desc').eq(0).should('exist') //ToDo: debe validar 5 caracteres
    cy.get('#item_4_title_link .inventory_item_name').should('contain', 'Sauce Labs Backpack')
    cy.get('#add-to-cart-sauce-labs-backpack').should('exist')
    //Item #2
    cy.get('#item_0_img_link img').invoke('attr', 'src').should('contain', '.jpg')
    cy.get('.pricebar').eq(1).should('contain', '$')
    cy.get('.inventory_item_desc').eq(1).should('exist') //ToDo: debe validar 5 caracteres
    cy.get('#item_0_title_link .inventory_item_name').should('contain', 'Sauce Labs Bike Light')
    cy.get('#add-to-cart-sauce-labs-bike-light').should('exist')
    //Item #3
    cy.get('#item_1_img_link img').invoke('attr', 'src').should('contain', '.jpg')
    cy.get('.pricebar').eq(2).should('contain', '$')
    cy.get('.inventory_item_desc').eq(2).should('exist') //ToDo: debe validar 5 caracteres
    cy.get('#item_1_title_link .inventory_item_name').should('contain', 'Sauce Labs Bolt T-Shirt')
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').should('exist')
    //Item #4
    cy.get('#item_5_img_link img').invoke('attr', 'src').should('contain', '.jpg')
    cy.get('.pricebar').eq(3).should('contain', '$')
    cy.get('.inventory_item_desc').eq(3).should('exist') //ToDo: debe validar 5 caracteres
    cy.get('#item_5_title_link .inventory_item_name').should('contain', 'Sauce Labs Fleece Jacket')
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').should('exist')
    //Item #5
    cy.get('#item_2_img_link img').invoke('attr', 'src').should('contain', '.jpg')
    cy.get('.pricebar').eq(4).should('contain', '$')
    cy.get('.inventory_item_desc').eq(4).should('exist') //ToDo: debe validar 5 caracteres
    cy.get('#item_2_title_link .inventory_item_name').should('contain', 'Sauce Labs Onesie')
    cy.get('#add-to-cart-sauce-labs-onesie').should('exist')
    //Item #6
    cy.get('#item_3_img_link img').invoke('attr', 'src').should('contain', '.jpg')
    cy.get('.pricebar').eq(5).should('contain', '$')
    cy.get('.inventory_item_desc').eq(5).should('exist') //ToDo: debe validar 5 caracteres
    cy.get('#item_3_title_link .inventory_item_name').should('contain', 'Test.allTheThings() T-Shirt (Red)')
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').should('exist')
  })

})

