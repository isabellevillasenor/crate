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
import SubNav from './SubNav'
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'

const MyProducts = () => (
  <>
    <SubNav />
    <div>Future My Products Component</div>
  </>
)

// Component Properties
MyProducts.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, { logout })(MyProducts)
