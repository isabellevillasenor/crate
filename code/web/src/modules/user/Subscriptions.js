// ANNOTATION: imports all required libraries, components, functions/props, etc.
// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from '../../ui/typography'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import { getListByUser } from '../subscription/api/actions'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'
import SubscriptionItem from '../subscription/Item'

// Component
// ANNOTATION: creates Subscriptions class component
// (what is a PureComponent? why is this a class component if it doesn't have constructor/super/state?)
class Subscriptions extends PureComponent {

  // Runs on server only for SSR
  // ANNOTATION: server side rendering?
  static fetchData({ store }) {
    return store.dispatch(getListByUser())
  }

  // Runs on client only
  // ANNOTATION: get list of subscriptions by user on load
  componentDidMount() {
    this.props.getListByUser()
  }

  render() {
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>My Subscriptions - Crate</title>
        </Helmet>

        {/* Top title bar */}
        {/* ANNOTATION: displays "My subscriptions" banner section */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">My subscriptions</H3>

            <p style={{ marginTop: '1em', color: grey2 }}>The crates you are subscribed to are listed here. You can
              cancel
              anytime.</p>
          </GridCell>
        </Grid>

        {/* Product list */}
        {/* ANNOTATION: displays each subscription item component (conditionally rendered) */}
        <Grid>
          <GridCell>
            {
              this.props.subscriptions.isLoading
                ? <Loading/>
                : this.props.subscriptions.list.length > 0
                    ? this.props.subscriptions.list.map(subscription => (
                        <div key={subscription.id} style={{ margin: '2em', float: 'left' }}>
                          <SubscriptionItem subscription={subscription} />
                        </div>
                      ))
                    : <EmptyMessage message="You are not subscribed to any crates yet." />
            }
          </GridCell>
        </Grid>
      </div>
    )
  }
}

// Component Properties
// ANNOTATION: adds prop type checking
Subscriptions.propTypes = {
  subscriptions: PropTypes.object.isRequired,
  getListByUser: PropTypes.func.isRequired
}

// Component State
// ANNOTATION: seems like this is a mapStateToProps/mapDispatchToProps situation?
function subscriptionsState(state) {
  return {
    subscriptions: state.subscriptionsByUser
  }
}

// ANNOTATION: connects a react component to our redux store
export default connect(subscriptionsState, { getListByUser })(Subscriptions)
