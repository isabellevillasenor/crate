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
import { logout, updateUserProfile, getUserProfile } from './api/actions'
import { APP_URL } from '../../setup/config/env'
import { subscription } from 'gql-query-builder'
import Axios from 'axios'

class MyAccount extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: this.props.user.details.name,
        id: this.props.user.details.id,
        image: this.props.user.details.image ||'',
        description: this.props.user.details.description ||'',
        email: this.props.user.details.email,
        address: this.props.user.details.address ||'',
      },
      descriptionEditMode: false,
      emailEditMode: false,
      addressEditMode: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    event.preventDefault()
    event.persist()
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [event.target.name]: event.target.value
      }
    }))
  }

  editProperty = (check) => {
    if(this.state[check]) {
      this.props.updateUserProfile(this.state.user)
    }

    this.setState({
      [check]: !this.state[check]
    })
  }

  renderButtonEditView = (valueProperty, clickCallback) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Input
          type='text'
          name='address'
          value={valueProperty}
          onChange={this.handleChange}
        />
        <Button
          type="submit"
          theme="secondary"
          style={{ display: 'flex', alignItems: 'center', height: '1.9em', marginLeft: '2em' }}
          onClick={clickCallback}
        >
          ✔️
        </Button>
      </div>
    )
  }

  renderButtonDefaultView = (valueProperty, clickCallback) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ color: black }}>{valueProperty}</p>
        <Button
          type="submit"
          theme="secondary"
          style={{ display: 'flex', alignItems: 'center', height: '1.9em', marginLeft: '2em' }}
          onClick={clickCallback}
        >
          <img src={`${ APP_URL }/images/icons8-edit-24.png`} alt="Edit" />
        </Button>
      </div>
    )
  }


  render() {
    return(
      <>
        <SubNav />

        <Grid>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H4 style={{ marginBottom: '0.5em' }}>{this.state.user.name}</H4>

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
                <File
                  type='file'
                  name='image'
                  text='Upload Image'
                  value={this.state.user.image}
                  onChange={this.handleChange}
                />

                {/* Personal Description */}
                <p style={{ color: grey2 }}><strong>Personal Description:</strong></p>
                {this.state.descriptionEditMode ? this.renderButtonEditView(this.state.user.description, () => this.editProperty('descriptionEditMode')) : this.renderButtonDefaultView(this.state.user.description, () => this.editProperty('descriptionEditMode'))}

              </section>

              <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', width: '40%', height: '60vh' }}>

                {/* Email */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <p style={{ color: grey2, marginBottom: '1.5em' }}>Email:</p>
                  {this.state.emailEditMode ? this.renderButtonEditView(this.state.user.email, () => this.editProperty('emailEditMode')) : this.renderButtonDefaultView(this.state.user.email, () => this.editProperty('emailEditMode'))}
                </div>

                {/* Mailing Address */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <p style={{ color: grey2, marginBottom: '1.5em' }}>Address:</p>
                  {this.state.addressEditMode ? this.renderButtonEditView(this.state.user.address, () => this.editProperty('addressEditMode')) : this.renderButtonDefaultView(this.state.user.address, () => this.editProperty('addressEditMode'))}
                </div>
              </section>
            </form>
          </GridCell>
        </Grid>
      </>
    )
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

export default connect(profileState, { logout, updateUserProfile, getUserProfile })(MyAccount)
