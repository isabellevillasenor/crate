//baseURL represents the landing page of "Profile" which displays "My Account"
const baseURL = 'http://localhost:3000/user/profile';
const myProducts = 'http://localhost:3000/user/my-products';

describe('My Products', () => {
  beforeEach(() => {
    cy.visit(baseURL);
    //Login to Seeder
    cy.get('header div a').contains('Login').click()
    cy.get('div div')
      .get('input[type=email]')
        .type('user@crate.com')
      .get('input[type=password]')
        .type('123456')
      .get('button').contains('Login').click()
  })

  it('Should navigate from Profile/My Accounts to My Products page', () => {
    cy.get('header div a').contains('Profile').click()
      .get('div button').contains('My Products').click()
      .location().should(loc => {
        expect(loc.pathname).to.eq('/user/my-products')
    })
  })

  it('Should navigate from Seen List', () => {
    cy.get('main nav').contains('Seen').click()
      .get('section table tbody tr td a').first().click()
      .location().should(loc => {
        expect(loc.pathname).to.eq('/bird_details/sheowl')
    })
  })

  it('Should tell us about a bird', () => {
    cy.get('main nav').contains('Seen').click()
    .get('section table tbody tr td a').first().click()
    .get('h2').contains('Short')
    .get('article')
    .get('img').should('have.attr', 'src', 'https://www.allaboutbirds.org/guide/assets/photo/37180721-1280px.jpg')
    .get('h3').contains('Short')
    .get('h4').contains('Asio')
    .get('a').should('have.attr', 'href', 'https://www.allaboutbirds.org/guide/Short-eared_Owl/')
  })
})
