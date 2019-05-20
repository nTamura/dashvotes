import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Auth from 'components/Views/Auth'

const Private = ({ component: RouteComponent, userExists, ...rest }) => (
  <Route
    {...rest}
    render={routeProps =>
      userExists ? <RouteComponent {...routeProps} /> : <Auth />
    }
  />
)

const mapStateToProps = state => ({
  userExists: state.firebase.auth.uid,
})

export default connect(mapStateToProps)(Private)
