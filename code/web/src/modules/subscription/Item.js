// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// UI Imports
import Card from '../../ui/card/Card'
import Button from '../../ui/button/Button'
import H4 from '../../ui/typography/H4'
import Icon from '../../ui/icon'
import { white, grey2, black } from '../../ui/common/colors'
import { Input, Select } from '../../ui/input'

// App Imports
import { APP_URL } from '../../setup/config/env'
import { messageShow, messageHide } from '../common/api/actions'
import { remove, getListByUser, updateSubscriptionDate } from '../subscription/api/actions'

// Component
class Item extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false, 
      delivery_date: this.convertDate(props.subscription.delivery_date)
    }
    console.log('in constructor', props.subscription.delivery_date)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onClickUnsubscribe = (id) => {
    let check = confirm('Are you sure you want to unsubscribe to this crate?')

    if(check) {
      this.setState({
        isLoading: true
      })

      this.props.messageShow('Subscribing, please wait...')

      this.props.remove({id})
        .then(response => {
          if (response.data.errors && response.data.errors.length > 0) {
            this.props.messageShow(response.data.errors[0].message)
          } else {
            this.props.messageShow('Unsubscribed successfully.')

            this.props.getListByUser()
          }
        })
        .catch(error => {
          this.props.messageShow('There was some error subscribing to this crate. Please try again.')
        })
        .then(() => {
          this.setState({
            isLoading: false
          })

          window.setTimeout(() => {
            this.props.messageHide()
          }, 5000)
        })
    }
  }

  handleChange(event) {
    event.preventDefault()
    event.persist()
    this.setState({
      delivery_date: event.target.value
    })
  }

  handleSubmit() {
    const unixDate = new Date(this.state.delivery_date)
    this.props.updateSubscriptionDate(this.props.subscription.id, unixDate)
  }

  convertDate(unixDate) {
    console.log(unixDate)
    if (unixDate) {
    const valueDate = []
    let date = new Date(parseInt(unixDate))
    valueDate.push(date.getFullYear())
    valueDate.push(("0" + (date.getMonth() + 1)).slice(-2))
    valueDate.push(("0" + date.getDate()).slice(-2))
    const dateString = valueDate.join('-')
    return dateString
    }
    return '2021-05-20'
  }

  render() {
    const { id, crate, createdAt, delivery_date} = this.props.subscription
    const { isLoading } = this.state

    return (
      <Card style={{ width: '18em', backgroundColor: white }} key={id}>
        <p style={{ padding: '2em 3em 0 3em' }}>
          <img src={`${ APP_URL }/images/crate.png`} alt={ crate.name } style={{ width: '100%' }}/>
        </p>

        <div style={{ padding: '1em 1.2em' }}>
          <H4 font="secondary" style={{ color: black }}>{ crate.name }</H4>

          <p style={{ color: grey2, marginTop: '1em' }}>{ crate.description }</p>

          <p style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
            <Button
              theme="secondary"
              onClick={this.onClickUnsubscribe.bind(this, id)}
              type="button"
              disabled={ isLoading }
            >
              <Icon size={1.2} style={{ color: white }}>remove_circle_outline</Icon> Unsubscribe
            </Button>
          </p>

          <p style={{ color: grey2, marginTop: '1em', fontSize: '0.8em', textAlign: 'center' }}>
            Subscribed on { new Date(parseInt(createdAt)).toDateString() }
          </p>
        </div>
        <div className='subscription-update' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '2rem' }}>
          <p style={{ color: grey2, marginBottom: '0.5rem', marginTop: '1rem' }}>Current delivery date</p>
          <div style={{ display: 'flex', flexDirection: 'column', justify: 'center', alignItems: 'center', textAlign: 'center' }}>
            <Input 
              type='date'
              min={this.convertDate(createdAt)}
              name='delivery_date'
              value={ this.state.delivery_date }
              onChange={this.handleChange}
              style={{ textAlign: 'center' }}
            />
            <Button
              type="submit"
              onClick={this.handleSubmit}
              theme="secondary"
              style={{ display: 'flex', alignItems: 'center', height: '1.9em', marginTop: '0.5em' }}
            >
              Update
            </Button>
          </div>
        </div>
      </Card>
    )
  }
}

// Component Properties
Item.propTypes = {
  subscription: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
  getListByUser: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired,
  updateSubscriptionDate: PropTypes.func.isRequired
}

// Component State
function itemState(state) {
  return {
    user: state.user
  }
}

export default connect(itemState, { remove, getListByUser, messageShow, messageHide, updateSubscriptionDate })(withRouter(Item))
