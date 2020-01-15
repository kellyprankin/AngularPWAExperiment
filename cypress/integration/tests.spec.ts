/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
  });

  it('App should load', () => {
    cy.visit('http://localhost:4200');

    cy
      .title()
      .should('be.contain', 'AngularLatestTest');
  });
});
