// Imports
import React from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//dynamically changes the header document title, metadata
import { Helmet } from 'react-helmet'
// this is being imported here in order to link you to the subscriptions path
import { Link } from 'react-router-dom'

// UI Imports
// importing pre made styled components and styling for buttons, grids, colors
// we will probably need to adjust some of the grids since we will be adding a whole new user dashboard
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
//importing all possible routes a user can go to; this includes login, signup, profile and subscriptions
import userRoutes from '../../setup/routes/user'
//importing logout functionality from actions that remvoes the user and token from local storage so that it persists after page reload
import { logout } from './api/actions'

// Component
const Profile = (props) => (
  <div>
    {/* SEO */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>
    {/*Add Profile image here*/}
    {/*need to have it linked to a post action that posts update of new profile image to the database */}
    {/*Add personal description here*/}
    {/*need to have it linked to a post action that posts update of new profile image to the database */}
    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>

        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>
        {/*Edit Email Here*/}
        {/*need to have it linked to a post or path action that posts an update of new email to the database*/}
        {/*Edit delivery address Here*/}
        {/*need to have it linked to a post or path action that posts an update of new address to the database*/}

        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>

        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>
  </div>
)

// Component Properties
// checking for the appropriate data type and being imported 
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State
// another way to say mapStateToProps
//allowing component to access data from the global redux store
function profileState(state) {
  return {
    user: state.user
  }
}
//connects react component to redux store - this is being imported from react-redux library
export default connect(profileState, { logout })(Profile)
