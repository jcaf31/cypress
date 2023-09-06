describe('Login', () => {
  let fixture;
  beforeEach(() => {
    cy.fixture('soucedemo.json').then((fixture_from_fixtures) => {
      fixture = fixture_from_fixtures;
      cy.visit(fixture.url);
    });
  })
  it('Login successfully', () => {

    cy.get("#user-name").type(fixture.userName);
    cy.get('[data-test="password"]').type(fixture.password);
    cy.get('[data-test="login-button"]').click();
    cy.url().should('eq', fixture.url + 'inventory.html');

  })
})