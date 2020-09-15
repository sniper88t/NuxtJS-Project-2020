/* eslint-disable */
const baseUrl = Cypress.env('baseUrl')

describe('Form Application', function() {
  beforeEach(function() {
    cy.visit(baseUrl)
  })

  it('Loads the home page', function() {
    cy.get('.form-label').should('exist')
    cy.percySnapshot('home page')
  })
})
