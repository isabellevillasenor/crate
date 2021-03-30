describe('Crate User Account Page', () => {
  before(() => {
    cy.visit('http://localhost:3000/user/profile')
    cy
      .get('form').get('input:first').should('have.attr', 'type', 'email').type('user@crate.com')
    cy
      .get('form').get('input').eq(1).should('have.attr', 'type', 'password').type('123456')
    cy
      .get('.jsx-2258186958 ').click()
    cy.wait(2000)
    cy  
      .get('.jsx-230203545 ').eq(2).click()
  })

  it('Should be able to visit the users account page that includes a sub nav with three buttons and a main profile section with the users name at the top', () => {
      cy
        .get('.jsx-856475002').find('.jsx-230203545').eq(1).children('have.length', 3)
      cy
        .get('jsx-230203545 ').find('h4').should('contain', 'The User')
  })

  it.skip('Should have a profile image and option to upload a new profile image', () => {
      cy
        .get('form').find('img').should('have.attr', 'src', 'src="https://hips.hearstapps.com/countryliving.cdnds.net/17/47/2048x1365/gallery-1511194376-cavachon-puppy-christmas.jpg?resize=768:*"')
      cy
        .get('jsx-jsx-1535210663 file-upload ').find('input').should('have.attr', 'type', 'file').click()
        //finish test to actually choose a file to upload and check src of new image
  })

  it.skip('Should have a personal description and option to edit personal description', () => {
      cy
        .get('form').find('.description').should('contain', 'Pickled hops explosion faux bacon food carts Vera Katz Ruby Jewel animal welfare west hills money tall boys stumptown dreadlocks cashew cheese Impossible Burger smoked ham ice cream a dog gym. No, You Go stumptown Portlandia plaid evergreens IPA co-op its raining again bubble tea Beaverton late-night happy hours neckbeard nothin muffin pearl district First Thursdays Rocky Butte. Flannel bicycle rights sustainable Santacon mustachioed bartenders beardfest 82nd Avenue of Roses gentrification clouds Snowpacolypse frozen fog dog parks scenester Silicon Forest. Kristian Foden-Vencil fifth quadrant microbrew vegan Gresham Alberta Hawthorne breweries wood-fired oven punk rock Hood to Coast veggie burger DIY Alberta Arts nanobrewery')
      cy
        .get('form').get('jsx-2258186958:first ').click()
        //finish test to test edit functionality of description and check the new description
  })

  it.skip('Should show users email and option to edit their email', () => {
      cy
        .get('form').find('.email').should('contain', 'user@crate.com')
      cy
        .get('form ').find('jsx-2258186958 ').eq(1).should('have.attr', 'type', 'submit').click()
        //finish test to for editing email and checking the new inputted email
  })

  it.skip('Should show users mailing address and option to edit their address', () => {
      cy
        .get('form').find('.address').should('contain', '1675 E 45th Dr, Denver, CO')
      cy
        .get('form ').find('jsx-2258186958 ').eq(2).should('have.attr', 'type', 'submit').click()
        //finish test to for editing address and checking the new submitted address
  })

  it.skip('Should show users current delivery date and option to change date in a dropdown', () => {
      cy
        .get('form').find('.deliveryDateDisplay').should('contain', 'Current delivery date: Monday')
      cy
        .get('form ').find('.deliveryDate').click()
        //finish choosing which day to change to and checking the updated date
        //this is all subject to change depending on how we decide to display this after API contract
      cy  
        .get('form ').find('jsx-2258186958 ').eq(3).should('have.attr', 'type', 'submit').click()
  })

  it.skip('Should be able to navigate to My Products page', () => {
      cy
        .get('jsx-230203545').find('.jsx-1228826222:first ').should('contain', 'My Products').click()
      // cy.url().should('include', '/user/my-products')
      //finish url path
  })

  it.skip('Should be able to navigate to Subscriptions Page', () => {
      cy
        .get('jsx-230203545 ').find('a:first').should('contain', 'Subscriptions').click()
      // cy.url().should('include', '/user/subscriptions')
      //finish url path
  })

  it.skip('Should be able to Logout', () => {
      cy
        .get('jsx-230203545').find('.jsx-1228826222 ').eq(1).should('contain', 'Logout').click()
      // cy.url().should('include', '/')
      //finish url path
  })

})
