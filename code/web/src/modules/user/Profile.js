// Imports
import React from 'react'
//we're adding an object that specifies types of props passed in, labeled 'Component Properties'
import PropTypes from 'prop-types'
//connects the component to the redux store as a container, as exported on last line
import { connect } from 'react-redux'
//dynamically changes the metadata like page title in the browser, etc. Wrapping the title in this
import { Helmet } from 'react-helmet'
//links the subscriptions button to the subscriptions page route onclick
import { Link } from 'react-router-dom'

// UI Imports - styling because we aren't doing a linked stylesheet
//we can use these to add things to the grid, style to be consistent
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
//this is the path to the subscriptions page for this user, used with the link the in the subscriptions button
import userRoutes from '../../setup/routes/user'
//this is a function that logs out the user when clicking the logout button that also updates profileState
//logout clears the localstorage of that users's 'token' and the 'user' information so no more persist on reload
//it also sends a dispatch which sends the action object to the reducer, which updates the store to remove the user from state
//when the user is removed 
import { logout } from './api/actions'

// Component
const Profile = (props) => (
  <div>
    {/* SEO - changes metadata and page title, uses Helmet import*/}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar  - no change needed? Maybe name customization */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>

    {/* Buttons for subscriptions and logging out */}
    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>

        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>
        {/* ADD - button to edit email? Maybe toggles a hidden input form or just have one here? Need an action to 'patch' and update email in database/update state with user details*/}

        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>

        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>

    {/* We need to add grids with buttons/input field/existing info for picture upload, delivery address, times available, product history*/}
  </div>
)

/* Component Properties, imported at top
  props.user.details should include: 
  { name: string,                       => PATCH, exists
    email: string,                      => PATCH, exists
    picture: string URL?,               => POST, add this
    address: string,                    => POST, add this
    available: array of objects [       => POST, add this
      {
        day: string, Monday, 
        time: string, 9-10
      }
    ]
    nextDelivery: object {              => POST, add this
        day: string, Monday, 
        time: string, 9-10
      }
    deliveredItems: array of objects [  => POST, add this
      { 
        itemId: num, 
        kept: false
      } 
    ]
  } 
we can then populate a display of the items/products based on the item ids in the user's history array
*/
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State, this is called 'mapStateToProps' in our examples
// allows the component to access the data in the store
// takes in global state object, returns object to be added to the store
// when we define a connect (to link component to the store) we have to have this function as part of that definition
// it lets us know which props we want to interact with and keep up to date inside of this component
function profileState(state) {
  return {
    user: state.user
  }
}

//connects component as container to Redux store
export default connect(profileState, { logout })(Profile)