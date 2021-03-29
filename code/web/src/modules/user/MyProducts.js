//Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'


// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2, black } from '../../ui/common/colors'

//App Imports
import SubNav from './SubNav'
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'

class MyProducts extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      viewAll: true
    }
  }

  toggleKept = () => {
    // event.preventDefault()
    this.setState({ viewAll: !this.state.viewAll })
  }

  render() {
    const kept = true
    const kept2 = false

    return (
      <>
        {/* SEO */}
        <Helmet>
            <title>Products - Admin - Crate</title>
        </Helmet>
        {/* Top menu bar */}
        <SubNav />
        {/* Page Content */}
        <div>
          <H3>Delivery History</H3>
          {/* Top actions bar */}
          <Grid alignCenter={true} style={{ padding: '1em' }}>
            <GridCell style={{ textAlign: 'right' }}>
              <Button theme="primary" style={{ marginTop: '1em' }} onClick={this.toggleKept} >
                Toggle Kept Products
              </Button>
            </GridCell>
          </Grid>
          {/* Product list */}
          <Grid alignCenter={true} style={{ padding: '1em' }}>
            <GridCell>
              <table className="striped">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Delivered On</th>
                    <th style={{ textAlign: 'center' }} >Kept</th>
                  </tr>
                </thead>

                {/*This is where we'll map through all state user products and return the tr:*/}
                {/*this.userProducts.map(product => {
                  return (
                    <tr key={product.id} { !this.state.viewAll && !product.kept && styles={{ visibility: 'hidden' }} }>
                      <td>
                        <img src={product.image} alt='product image' />
                      </td>
                      <td>
                        { product.name }
                      </td>
                      <td>
                        { product.description }
                      </td>
                      <td>
                        { product.deliveredDate }
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        {product.kept && <p>⭐️</p>}
                      </td>
                    </tr>
                  )
                })*/}

                <tbody>
                  <tr key={666} styles={{ display: this.state.viewAll && kept ? 'block' : 'none' }}>
                    <td>
                    <img src='https://hips.hearstapps.com/countryliving.cdnds.net/17/47/2048x1365/gallery-1511194376-cavachon-puppy-christmas.jpg?resize=100:*' alt='profile image' />

                    </td>
                    <td>
                      { 'pants' }
                    </td>
                    <td>
                      { 'two legs' }
                    </td>
                    <td>
                      {'11/22/3333'}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      {kept && <p>⭐️</p>}
                    </td>
                  </tr>
                  <tr key={667} styles={{ display: this.state.viewAll && kept2 ? 'block' : 'none' }}>
                    <td>
                    <img src='https://hips.hearstapps.com/countryliving.cdnds.net/17/47/2048x1365/gallery-1511194376-cavachon-puppy-christmas.jpg?resize=100:*' alt='profile image' />

                    </td>
                    <td>
                      { 'shirt' }
                    </td>
                    <td>
                      { 'two arms' }
                    </td>
                    <td>
                      {'11/22/3337'}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      {kept2 && <p>⭐️</p>}
                    </td>
                  </tr>
                </tbody>
              </table>
            </GridCell>
          </Grid>
        </div>
      </>
    )
  }
}

// Component Properties
MyProducts.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State
function productsState(state) {
  return {
    user: state.user
  }
}

export default connect(productsState, { logout })(MyProducts)
