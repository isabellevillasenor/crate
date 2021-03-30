describe('Crate User Account Page', () => {
  before(() => {
    cy.visit('http://localhost:3000/user/profile')
    cy
      .get('form').get('input:first').should('have.attr', 'type', 'email').type('user@crate.com')
    cy
      .get('form').get('input').eq(1).should('have.attr', 'type', 'password').type('123456')
    cy
      .get('.jsx-2258186958 ').click()
    cy  
      .get('.jsx-230203545 ').eq(2).click()
  })

  it('Should be able to visit the users account page that includes a sub nav with three buttons and a main profile section with the users name at the top', () => {
      cy
        .get('.jsx-715511798').find('.jsx-230203545').children('have.length', 3)
      cy
        .get('jsx-230203545 ').find('h4').should('contain', 'The User')
  })

  
})

