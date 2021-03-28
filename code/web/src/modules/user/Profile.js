// Imports
import React from 'react'
import { Helmet } from 'react-helmet'

// App Imports
import MyAccount from './MyAccount'

// Component
const Profile = () => (
  <div>
    {/* SEO */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
          <Link to={userRoutes.profile.path}>
            <Button theme="primary" style={{ marginLeft: '1em' }}>My Account</Button>
          </Link>

          <Link to={userRoutes.products.path}>
            <Button theme="primary" style={{ marginLeft: '1em' }}>My Products</Button>
          </Link>

          <Button onClick={props.logout} theme="primary" style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>

    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>

        {/*<p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>*/}

      </GridCell>
    </Grid>

      <MyAccount />

  </div>
)

export default Profile
