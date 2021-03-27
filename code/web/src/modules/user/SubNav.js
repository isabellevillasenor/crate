//Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2, black } from '../../ui/common/colors'

//App Imports
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'

const SubNav = (props) => (
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
)

// Component Properties
SubNav.propTypes = {
  logout: PropTypes.func.isRequired
}

export default SubNav
