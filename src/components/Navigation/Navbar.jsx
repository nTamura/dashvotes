import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import { Link } from 'react-router-dom'
import logo from 'assets/dashSm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar({ classes }) {
  return (
    <nav className={classes.root}>
      <Link to="/">
        <img src={logo} className={classes.logo} alt="Dash Logo" />
      </Link>
      <FontAwesomeIcon icon={faBars} className={classes.menu} />
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
    // padding: 8,
  },
  menu: {
    fontSize: '1.5rem',
    margin: 8,
  },
}

export default withStyles(styles)(Navbar)
