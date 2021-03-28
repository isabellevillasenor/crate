//Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2, black } from '../../ui/common/colors'

//App Imports
import SubNav from './SubNav'
import { logout } from './api/actions'

const MyAccount = (props) => (
  <>
    <SubNav />
    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>
        <form>
          {/* Profile Image */}
          <img src='https://hips.hearstapps.com/countryliving.cdnds.net/17/47/2048x1365/gallery-1511194376-cavachon-puppy-christmas.jpg?resize=768:*' alt='profile image' />
          <input type='file' name='image' />

          {/* Email */}
          <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>
          <input type='text' value='' name='email' placeholder='Update email here' />
          <button>edit</button>

          {/* Personal Description */}
          <p style={{ color: grey2, marginBottom: '2em' }}>Personal Description will render here</p>
          <input type='textarea' value='' name='description' placeholder='Update description here' />
          <button>edit</button>

          {/* Mailing Address */}
          <p style={{ color: grey2, marginBottom: '2em' }}>Address will render here</p>
          <input type='text' value='' name='address' placeholder='Update address here' />
          <button>edit</button>

          {/* Delivery Date */}
          <p style={{ color: grey2, marginBottom: '2em' }}>Delivery Date will render here</p>
          <select name='deliveryDate'>
            <option value='Monday'>Monday</option>
            <option value='Tuesday'>Tuesday</option>
            <option value='Wednesday'>Wednesday</option>
            <option value='Thursday'>Thursday</option>
            <option value='Friday'>Friday</option>
            <option value='Saturday'>Saturday</option>
            <option value='Sunday'>Sunday</option>
          </select>
          <button>edit</button>
        </form>
      </GridCell>
    </Grid>
  </>
)

// Component Properties
MyAccount.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, { logout })(MyAccount)