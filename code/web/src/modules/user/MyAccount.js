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
import { logout, updateUserProfile } from './api/actions'
import { APP_URL } from '../../setup/config/env'

class MyAccount extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      image: this.props.user.details.image,
      //'https://hips.hearstapps.com/countryliving.cdnds.net/17/47/2048x1365/gallery-1511194376-cavachon-puppy-christmas.jpg?resize=768:*',
      description: this.props.user.details.description,
      email: this.props.user.details.email,
      address: this.props.user.details.address,
      name: this.props.user.details.name,
      descriptionEditMode: false,
      emailEditMode: false,
      addressEditMode: false,
      nameEditMode: false
    }
    console.log('PROPS', props)
  }

  handleChange = event => {
    event.preventDefault()

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  changeDescriptionEditMode = event => {
    event.preventDefault()

    if(this.state.descriptionEditMode) {
      console.log('IN-EDIT-DESCRIPTION');
      this.props.updateUserProfile(this.state.description, 'description')
    }

    this.setState({
      descriptionEditMode: !this.state.descriptionEditMode
    })
  }

  renderDescriptionEditView = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Textarea
          type='textarea'
          name='description'
          value={this.state.description}
          onChange={this.handleChange}
        />
        <Button
          type="submit"
          theme="secondary"
          style={{ display: 'flex', alignItems: 'center', height: '1.9em', marginLeft: '2em' }}
          onClick={this.changeDescriptionEditMode} //add updateUserData(textareainput, 'description')
        >
          ✔️
        </Button>
      </div>
    )
  }

  renderDescriptionDefaultView = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ color: black, overflow: 'scroll' }}>{this.state.description}</p>
        <Button
          type="submit"
          theme="secondary"
          style={{ display: 'flex', alignItems: 'center', height: '1.9em', marginLeft: '2em' }}
          onClick={this.changeDescriptionEditMode}
        >
          <img src={`${ APP_URL }/images/icons8-edit-24.png`} alt="Edit" />
        </Button>
      </div>
    )
  }

  changeEmailEditMode = () => {
    event.preventDefault()

    if(this.state.emailEditMode) {
      console.log('IN-EDIT-EMAIL');
      this.props.updateUserProfile(this.state.email, 'email')
    }

    this.setState({
      emailEditMode: !this.state.emailEditMode
    })
  }

  renderEmailEditView = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Input
          type='text'
          name='email'
          value={this.state.email}
          onChange={this.handleChange}
        />
        <Button
          type="submit"
          theme="secondary"
          style={{ display: 'flex', alignItems: 'center', height: '1.9em', marginLeft: '2em' }}
          onClick={() => this.changeEmailEditMode()}
        >
          ✔️
        </Button>
      </div>
    )
  }

  renderEmailDefaultView = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ color: black }}>{this.state.email}</p>
        <Button
          type="submit"
          theme="secondary"
          style={{ display: 'flex', alignItems: 'center', height: '1.9em', marginLeft: '2em' }}
          onClick={this.changeEmailEditMode}
        >
          <img src={`${ APP_URL }/images/icons8-edit-24.png`} alt="Edit" />
        </Button>
      </div>
    )
  }

  changeAddressEditMode = () => {
    event.preventDefault()

    if(this.state.addressEditMode) {
      console.log('IN-EDIT-ADDRESS');
      this.props.updateUserProfile(this.state.address, 'address')
    }

    this.setState({
      addressEditMode: !this.state.addressEditMode
    })
  }

  renderAddressEditView = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Input
          type='text'
          name='address'
          value={this.state.address}
          onChange={this.handleChange}
        />
        <Button
          type="submit"
          theme="secondary"
          style={{ display: 'flex', alignItems: 'center', height: '1.9em', marginLeft: '2em' }}
          onClick={this.changeAddressEditMode}
        >
          ✔️
        </Button>
      </div>
    )
  }

  renderAddressDefaultView = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ color: black }}>{this.state.address}</p>
        <Button
          type="submit"
          theme="secondary"
          style={{ display: 'flex', alignItems: 'center', height: '1.9em', marginLeft: '2em' }}
          onClick={this.changeAddressEditMode}
        >
          <img src={`${ APP_URL }/images/icons8-edit-24.png`} alt="Edit" />
        </Button>
      </div>
    )
  }

  editProperty = (field, check) => {
    event.preventDefault()

    if(this.state.addressEditMode) {
      console.log('IN-EDIT', field);
      this.props.updateUserProfile(this.state[field], field)
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
            <H4 style={{ marginBottom: '0.5em' }}>{this.props.user.details.name}</H4>
            {this.state.nameEditMode ? this.renderButtonEditView(this.state.name, this.editProperty('name', this.nameEditMode)) : this.renderButtonDefaultView('name', this.editProperty('name', this.nameEditMode))}
            
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
                  value={this.state.image}
                  onChange={this.handleChange}
                />

                {/* Personal Description */}
                <p style={{ color: grey2 }}><strong>Personal Description:</strong></p>
                {this.state.descriptionEditMode ? this.renderDescriptionEditView() : this.renderDescriptionDefaultView()}

              </section>

              <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', width: '40%', height: '60vh' }}>

                {/* Email */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <p style={{ color: grey2, marginBottom: '1.5em' }}>Email:</p>
                  {this.state.emailEditMode ? this.renderEmailEditView() : this.renderEmailDefaultView()}
                </div>

                {/* Mailing Address */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <p style={{ color: grey2, marginBottom: '1.5em' }}>Address:</p>
                  {this.state.addressEditMode ? this.renderAddressEditView() : this.renderAddressDefaultView()}
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

export default connect(profileState, { logout, updateUserProfile })(MyAccount)
