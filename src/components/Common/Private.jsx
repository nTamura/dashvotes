import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Entry from 'components/Auth/Entry'

const Private = ({ component: RouteComponent, userExists, ...rest }) => (
  <Route
    {...rest}
    render={routeProps =>
      userExists ? <RouteComponent {...routeProps} /> : <Entry />
    }
  />
)

const mapStateToProps = state => ({
  userExists: state.firebase.auth.uid,
})

export default connect(mapStateToProps)(Private)
