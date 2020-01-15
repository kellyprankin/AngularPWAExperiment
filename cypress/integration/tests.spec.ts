/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
  });

  it('App should load', () => {
    cy.visit('https://localhost:8888');

    cy
      .title()
      .should('be.contain', 'AngularLatestTest');
  });
});
