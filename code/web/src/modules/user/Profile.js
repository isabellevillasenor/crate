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

    <MyAccount />
    
  </div>
)

export default Profile
