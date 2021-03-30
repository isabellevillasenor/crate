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

  it('Should have a profile image and option to upload a new profile image', () => {
      cy
        .get('form').find('img').should('have.attr', 'src', 'src="https://hips.hearstapps.com/countryliving.cdnds.net/17/47/2048x1365/gallery-1511194376-cavachon-puppy-christmas.jpg?resize=768:*"')
      cy
        .get('jsx-jsx-1535210663 file-upload ').find('input').should('have.attr', 'type', 'file').click()
        //finish test to actually choose a file to upload and check src of new image
  })

    it('Should have a personal description and option to edit personal description', () => {
      cy
        .get('form').find('.description').should('contain', 'Pickled hops explosion faux bacon food carts Vera Katz Ruby Jewel animal welfare west hills money tall boys stumptown dreadlocks cashew cheese Impossible Burger smoked ham ice cream a dog gym. No, You Go stumptown Portlandia plaid evergreens IPA co-op its raining again bubble tea Beaverton late-night happy hours neckbeard nothin muffin pearl district First Thursdays Rocky Butte. Flannel bicycle rights sustainable Santacon mustachioed bartenders beardfest 82nd Avenue of Roses gentrification clouds Snowpacolypse frozen fog dog parks scenester Silicon Forest. Kristian Foden-Vencil fifth quadrant microbrew vegan Gresham Alberta Hawthorne breweries wood-fired oven punk rock Hood to Coast veggie burger DIY Alberta Arts nanobrewery')
      cy
        .get('form').get('jsx-2258186958:first ').click()
        //finish test to test edit functionality of description
  
})

  it('Should show users email and option to edit their email', () => {
      cy
        .get('form').find('.email').should('contain', 'user@crate.com')
      cy
        .get('form ').find('jsx-2258186958 ').eq(2).should('have.attr', 'type', 'submit').click()
        //finish test to for editing email
  })

  it('Should show users mailing address and option to edit their address', () => {
      cy
        .get('form').find('.email').should('contain', 'user@crate.com')
      cy
        .get('form ').find('jsx-2258186958 ').eq(2).should('have.attr', 'type', 'submit').click()
        //finish test to for editing email
  })

})
