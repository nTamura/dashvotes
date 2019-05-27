import React from 'react'
import withStyles from 'react-jss'
import { Link, withRouter } from 'react-router-dom'
import logo from 'assets/dashSm.png'
import NavMenu from 'components/Navigation/NavMenu'
import { connect } from 'react-redux'
import { signOut } from 'store/actions/authActions'

function Navbar({ classes, profile, userExists, signOut, location }) {
  return (
    <nav className={classes.root}>
      <Link to="/">
        <img src={logo} className={classes.logo} alt="Dash Logo" />
      </Link>
      {userExists ? (
        <NavMenu signOut={signOut} profile={profile} />
      ) : (
        <Link to="/">{location.pathname !== '/' && 'Sign in'}</Link>
      )}
    </nav>
  )
}

const styles = {
  root: {
    height: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
  },
  logo: {
    height: 32,
  },
}

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
})

const mapStateToProps = state => ({
  userExists: state.firebase.auth.uid,
  profile: state.firebase.profile,
})

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(Navbar))
)
