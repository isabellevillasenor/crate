//Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H4 } from '../../ui/typography'
import { Input, Textarea, File, Select } from '../../ui/input'
import Icon from '../../ui/icon'
import Button from '../../ui/button'
import { grey2, black } from '../../ui/common/colors'

//App Imports
import SubNav from './SubNav'
import { logout } from './api/actions'
import { APP_URL } from '../../setup/config/env'

class MyAccount extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    <>
      <SubNav />

      <Grid>
        <GridCell style={{ padding: '2em', textAlign: 'center' }}>
          <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>

          <form style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', width: '40%', height: '60vh' }}>

              {/* Profile Image */}
              <div style={{ width: '200px', height: '200px', position: 'relative', overflow: 'hidden', borderRadius: '50%' }}>
                <img
                  src='https://hips.hearstapps.com/countryliving.cdnds.net/17/47/2048x1365/gallery-1511194376-cavachon-puppy-christmas.jpg?resize=768:*'
                  alt='profile image'
                  style={{ display: 'inline', margin: '0 auto', marginLeft: '-25%', height: '100%', width: 'auto' }}
                />
              </div>
              <File type='file' name='image' text='Upload Image' />

              {/* Personal Description */}
              <p style={{ color: grey2 }}><strong>Personal Description:</strong></p>
              <p style={{ color: grey2 }}>Pickled hops explosion faux bacon food carts Vera Katz Ruby Jewel animal welfare west hills money tall boys stumptown dreadlocks cashew cheese Impossible Burger smoked ham ice cream a dog gym. No, You Go stumptown Portlandia plaid evergreens IPA co-op it's raining again bubble tea Beaverton late-night happy hours neckbeard nothin' muffin pearl district First Thursdays Rocky Butte. Flannel bicycle rights sustainable Santacon mustachioed bartenders beardfest 82nd Avenue of Roses gentrification clouds Snowpacolypse frozen fog dog parks scenester Silicon Forest. Kristian Foden-Vencil fifth quadrant microbrew vegan Gresham Alberta Hawthorne breweries wood-fired oven punk rock Hood to Coast veggie burger DIY Alberta Arts nanobrewery.</p>
              {/*<Textarea type='textarea' value='' name='description' placeholder='' /> HAVE THIS APPEAR ON CLICK*/}
              <Button
                type="submit"
                theme="secondary"
                style={{ display: 'flex', alignItems: 'center', height: '1.9em', marginLeft: '2em' }}
              >
                <img src={`${ APP_URL }/images/icons8-edit-24.png`} alt="Edit" />
              </Button>

            </section>

            <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', width: '40%', height: '60vh' }}>

              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ color: grey2, marginBottom: '1.5em' }}>Email:</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Input
                    type='text'
                    value=''
                    name='email'
                    placeholder={props.user.details.email}
                    style={{ textAlign: 'center' }}
                  />
                  <Button
                    type="submit"
                    theme="secondary"
                    style={{ display: 'flex', alignItems: 'center', height: '1.9em', marginLeft: '2em' }}
                  >
                    <img src={`${ APP_URL }/images/icons8-edit-24.png`} alt="Edit" />
                  </Button>
                </div>
              </div>

              {/* Mailing Address */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ color: grey2, marginBottom: '1.5em' }}>Address:</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Input
                    type='text'
                    value=''
                    name='address'
                    placeholder='1675 E 45th Dr, Denver, CO'
                  />
                  <Button
                    type="submit"
                    theme="secondary"
                    style={{ display: 'flex', alignItems: 'center', height: '1.9em', marginLeft: '2em' }}
                  >
                    <img src={`${ APP_URL }/images/icons8-edit-24.png`} alt="Edit" />
                  </Button>
                </div>
              </div>

              {/* Delivery Date */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{ color: grey2, marginBottom: '1.5em' }}>Current delivery date: Monday</p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Select name='deliveryDate'>
                    <option value='Monday'>Monday</option>
                    <option value='Tuesday'>Tuesday</option>
                    <option value='Wednesday'>Wednesday</option>
                    <option value='Thursday'>Thursday</option>
                    <option value='Friday'>Friday</option>
                    <option value='Saturday'>Saturday</option>
                    <option value='Sunday'>Sunday</option>
                  </Select>
                  <Button
                    type="submit"
                    theme="secondary"
                    style={{ display: 'flex', alignItems: 'center', height: '1.9em', marginLeft: '2em', color: black }}
                  >
                    Submit
                  </Button>
                </div>
              </div>

            </section>

          </form>
        </GridCell>
      </Grid>
    </>
  }
}

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
