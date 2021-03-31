// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from '../../ui/typography'
import { Input, Select } from '../../ui/input'
import Icon from '../../ui/icon'
import Button from '../../ui/button'
import { grey, grey2, black } from '../../ui/common/colors'

// App Imports
import { getListByUser } from '../subscription/api/actions'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'
import SubscriptionItem from '../subscription/Item'

// Component
class Subscriptions extends PureComponent {

  // Runs on server only for SSR
  static fetchData({ store }) {
    return store.dispatch(getListByUser())
  }

  // Runs on client only
  componentDidMount() {
    this.
    props.getListByUser()
  }

//Where does this need to be called? I wasn't sure of the logic, so I stuck with the hard coded data for now.
  renderSubscriptions = () => {
    return [subscriptions].map(subscription => {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ color: grey2, marginBottom: '1.5em' }}>Current delivery date: {subscription.deliveryDate}</p>
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

      )
    })

  }



  render() {
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>My Subscriptions - Crate</title>
        </Helmet>

        {/* Top title bar */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">My subscriptions</H3>

            <p style={{ marginTop: '1em', color: grey2 }}>The crates you are subscribed to are listed here. You can
              cancel
              anytime.</p>
          </GridCell>
        </Grid>

        {/* Product list */}
        <Grid>
          <GridCell>
            {
              this.props.subscriptions.isLoading
                ? <Loading/>
                : this.props.subscriptions.list.length > 0
                    ? this.props.subscriptions.list.map(subscription => (
                      <>
                        <div key={subscription.id} style={{ margin: '2em', float: 'left' }}>
                          <SubscriptionItem subscription={subscription} />
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <p style={{ color: grey2, marginBottom: '1.5em', marginTop: '1.5em' }}>Current delivery date: {subscription.deliveryDate}</p>
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
                                style={{ display: 'flex', alignItems: 'center', height: '1.9em', marginLeft: '2em' }}
                              >
                                Submit
                              </Button>
                            </div>
                          </div>
                        </div>
                      </>))
                      : <EmptyMessage message="You are not subscribed to any crates yet." />
            }
          </GridCell>
        </Grid>
      </div>
    )
  }
}

// Component Properties
Subscriptions.propTypes = {
  subscriptions: PropTypes.object.isRequired,
  getListByUser: PropTypes.func.isRequired
}

// Component State
function subscriptionsState(state) {
  return {
    subscriptions: state.subscriptionsByUser
  }
}

export default connect(subscriptionsState, { getListByUser })(Subscriptions)
