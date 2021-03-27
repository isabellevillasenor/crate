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
          <Link to={userRoutes.profile.path}>
            <Button theme="primary" style={{ marginLeft: '1em' }}>My Account</Button>
          </Link>

          <Link to={userRoutes.products.path}>
            <Button theme="primary" style={{ marginLeft: '1em' }}>My Products</Button>
          </Link>

          <Button onClick={props.logout} theme="primary" style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>

    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>

        {/*<p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>*/}

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
