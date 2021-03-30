//baseURL represents the landing page of "Profile" which displays "My Account"
const baseURL = 'http://localhost:3000/crates';
const myProducts = 'http://localhost:3000/user/my-products';

describe('My Products', () => {
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

  it('Should navigate from Profile/My Accounts to My Products page', () => {
    cy.get('header div').contains('Profile').click()
      .get('div button').contains('My Products').click()
      .location().should(loc => {
        expect(loc.pathname).to.eq('/user/my-products')
    })
      .get('div button').eq(1)
        .should('have.css', 'background-color', 'rgb(234, 84, 85)')
  })

  it('Should display my products', () => {
    cy.get('header div').contains('Profile').click()
      .get('div button').contains('My Products').click()
    //this might need to change depending on what's generated in the seeder data
    cy.get('div table tbody tr')
      .should('be.visible').and('have.length', '2')
  })

  it.only('Should be able to show only kept items', () => {
    cy.get('header div').contains('Profile').click()
      .get('div button').contains('My Products').click()
    //this might need to change depending on what's generate in the seeder data
    cy.get('div button').eq(3).click()
  })
})
