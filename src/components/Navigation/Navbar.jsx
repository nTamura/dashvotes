import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import { Link } from 'react-router-dom'
import logo from 'assets/dashSm.png'
import NavMenu from 'components/Navigation/NavMenu'
import { connect } from 'react-redux'

function Navbar({ classes, userExists }) {
  return (
    <nav className={classes.root}>
      <Link to="/">
        <img src={logo} className={classes.logo} alt="Dash Logo" />
      </Link>
      {userExists ? <NavMenu /> : <Link to="/">Sign in</Link>}
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

const mapStateToProps = state => {
  return {
    userExists: state.firebase.auth.uid,
    profile: state.firebase.profile,
  }
}

export default withStyles(styles)(connect(mapStateToProps)(Navbar))
