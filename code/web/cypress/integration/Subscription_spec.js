//baseURL represents the landing page of "Profile" which displays "My Account"
const baseURL = 'http://localhost:3000/crates';

describe('Subscriptions', () => {
  beforeEach(() => {
    cy.visit(baseURL);
    //Login to Seeder
    //Seeder contains subscriptions
    cy.get('header div a').contains('Login').click()
    cy.get('div div')
      .get('input[type=email]')
        .type('user@crate.com')
      .get('input[type=password]')
        .type('123456')
      .get('button').contains('Login').click()
  })

  it.only('Should be able to subscribe to a new crate', () => {
    cy.get('.jsx-511674265').first()
      .get('button').first().click()
      .location().should(loc => {
        expect(loc.pathname).to.eq('/user/subscriptions')
    })
    cy.get('.jsx-230203545 div').should('be.visible')
  })

  it('Should be able to edit delivery date', () => {

  })
})
