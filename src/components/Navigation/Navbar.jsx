import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import { Link } from 'react-router-dom'

function Navbar({ classes }) {
  return (
    <nav className={classes.root}>
      <Link to="/">Home</Link>
      <p>Menu</p>
    </nav>
  )
}

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}

export default withStyles(styles)(Navbar)
