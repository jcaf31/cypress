describe('Login', () => {

  let fixture;

  beforeEach(() => {
    cy.fixture('soucedemo.json').then((fixture_from_fixtures) => {
      fixture = fixture_from_fixtures;
      cy.visit(fixture.url);
    });
  })

  it('Login successfully', () => {
    cy.login(fixture.userName, fixture.password);
    cy.url().should('eq', fixture.url + 'inventory.html');
  })

})