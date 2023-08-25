describe('shopping cart', () => {
  let fixture;
  beforeEach(() => {
    cy.fixture('soucedemo.json').then((fixture_from_fixtures) => {
      fixture = fixture_from_fixtures;
    });
    cy.visit('http://www.saucedemo.com/')
  })
  it('Login successfully', () => {
    cy.get("#user-name").type(fixture.user_name)
    cy.get('[data-test="password"]').type(fixture.password)
    cy.get('[data-test="login-button"]').click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    cy.get('.app_logo').contains('Swag Labs')
    cy.get('.title').contains('Products')
    //Aqui quede
  })
})