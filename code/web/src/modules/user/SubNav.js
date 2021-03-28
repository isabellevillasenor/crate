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
// import { primary, secondary } from '../..ui/common/gradients'

//App Imports
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'

const SubNav = () => {
  const currentPage = window.location.pathname
  const checkColor = linkName => {
    return currentPage === linkName 
      ? 'secondary'
      : 'primary'
  }
  {/*
    
    I'm trying to set up for setting the theme as either 'primary' (purple) or 'secondary' (orange) depending on which subtab is open.

    I think I'm close, but not quite.

    const assessTheme = () => {
      if (window.location.pathname ===    userRoutes.profile.path) {
        return secondary
      } else if (window.location.pathname === userRoutes.profile.path) {
        return secondary
      }
    }
  */}


    return (
      <Grid style={{ backgroundColor: grey }}>
        <GridCell style={{ padding: '2em', textAlign: 'center' }}>

        <Link to={userRoutes.profile.path}>
          <Button theme={checkColor('/user/profile')} style={{ marginLeft: '1em' }}>My Account {`${currentPage}`}</Button>
        </Link>

        <Link to={userRoutes.products.path}>
          <Button theme={checkColor('/user/my-products')} style={{ marginLeft: '1em' }}>My Products</Button>
        </Link>

        <Button onClick={props.logout} theme="primary" style={{ marginLeft: '1em' }}>Logout</Button>
        </GridCell>
      </Grid>
  )
}

// Component Properties
SubNav.propTypes = {
  logout: PropTypes.func.isRequired
}

//do we need a defaultProps like was used in MenuItem to manipulate active state?

// Component State
function subNavState(state) {
  return {
    user: state.user
  }
}

export default connect(subNavState, { logout })(SubNav)
