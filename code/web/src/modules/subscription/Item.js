// ANNOTATION: imports all required libraries, components, functions/props, etc.
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

// App Imports
import { APP_URL } from '../../setup/config/env'
import { messageShow, messageHide } from '../common/api/actions'
import { remove, getListByUser } from '../subscription/api/actions'

// Component
// ANNOTATION: creates Subscriptions class component (what is a PureComponent?)
class Item extends PureComponent {

  constructor(props) {
    super(props)

    // ANNOTATION: sets initial state for component
    this.state = {
      isLoading: false
    }
  }

  // ANNOTATION: runs when a user clicks unsubscribe on an Item (crate subscription)
  onClickUnsubscribe = (id) => {
    // ANNOTATION: an alert box that pops up
    let check = confirm('Are you sure you want to unsubscribe to this crate?')

    // ANNOTATION: if user clicked ok on alert box, run the following...
    if(check) {
      this.setState({
        isLoading: true
      })

      // ANNOTATION: ...not sure why this is here?
      this.props.messageShow('Subscribing, please wait...')

      // ANNOTATION: a POST that removes that subscription from the user's subscriptions list by id
      this.props.remove({id})
        .then(response => {
          if (response.data.errors && response.data.errors.length > 0) {
            // ANNOTATION: checks for errors
            this.props.messageShow(response.data.errors[0].message)
          } else {
            // ANNOTATION: success message
            this.props.messageShow('Unsubscribed successfully.')

            // ANNOTATION: refreshes the user's subscription list in the UI
            this.props.getListByUser()
          }
        })
        // ANNOTATION: another error message?
        .catch(error => {
          this.props.messageShow('There was some error subscribing to this crate. Please try again.')
        })

        // ANNOTATION: loading & messages go away once action has been resolved
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

  // displays user subscriptions
  render() {
    const { id, crate, createdAt } = this.props.subscription
    const { isLoading } = this.state

    return (
      <Card style={{ width: '18em', backgroundColor: white }}>
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
      </Card>
    )
  }
}

// Component Properties
// ANNOTATION: adds prop type checking
Item.propTypes = {
  subscription: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
  getListByUser: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

// Component State
// ANNOTATION: seems like this is a mapStateToProps/mapDispatchToProps situation?
function itemState(state) {
  return {
    user: state.user
  }
}

// ANNOTATION: connects a react component to our redux store... withRouter?
export default connect(itemState, { remove, getListByUser, messageShow, messageHide })(withRouter(Item))
