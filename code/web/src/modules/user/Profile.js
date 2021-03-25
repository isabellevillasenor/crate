// ANNOTATION: imports all required libraries, components, functions/props, etc.
// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'

// Component
// ANNOTATION: creates Profile function component
const Profile = (props) => (
  <div>
    {/* SEO */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar */}
    {/* ANNOTATION: displays "My Profile" banner section - REPLACE WITH SUBNAV */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>

    {/* ANNOTATION: displays the name & email of the user that logged in */}
    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        {/* ANNOTATION: add profile pic */}

        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>

        {/* ANNOTATION: add edit email button */}
        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>

        {/* ANNOTATION: add personal description and edit button */}
        {/* ANNOTATION: add address and edit button */}
        {/* ANNOTATION: add delivery date edit dropdown */}

        {/* ANNOTATION: displays a button linking to the user's subscriptions page (also found in header) - REMOVE */}
        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>

        {/* ANNOTATION: displays a button to log out - MOVE TO SUB NAV */}
        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>
  </div>
)

// Component Properties
// ANNOTATION: adds prop type checking
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State
// ANNOTATION: seems like this is a mapStateToProps/mapDispatchToProps situation?
function profileState(state) {
  return {
    user: state.user
  }
}

// ANNOTATION: connects a react component to our redux store
export default connect(profileState, { logout })(Profile)
