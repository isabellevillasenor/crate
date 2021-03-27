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
import { grey, grey2, black } from '../../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'
import Menu from '../common/header/Menu'
import MenuItem from '../common/header/MenuItem'

// Component
const Profile = (props) => (
  <div>
    {/* SEO */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <Menu>
          <MenuItem to={userRoutes.profile.path} type="primary" style={{ color: black }}>My Account</MenuItem>

          {/*<MenuItem section="products" type="primary" style={{ color: black }}>My Products</MenuItem>*/}

          {/*<MenuItem type="primary" style={{ color: black }}>Logout</MenuItem>*/}
        </Menu>
      </GridCell>
    </Grid>

    <Button theme="secondary" style={{ marginLeft: '1em' }}>My Account</Button>
    <Button theme="secondary" style={{ marginLeft: '1em' }}>My Products</Button>
    <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>

    {/* Top title bar */}
    {/*<Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>*/}

    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>

        {/*<p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>*/}

        {/*<Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>*/}

      </GridCell>
    </Grid>
  </div>
)

// Component Properties
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, { logout })(Profile)
