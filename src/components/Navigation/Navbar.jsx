import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import { Link } from 'react-router-dom'

function Navbar({ classes }) {
  return (
    <nav>
      <Link to="/">Home</Link>
    </nav>
  )
}

const styles = {
  root: {},
  body: {
    flex: 1,
  },
}

export default withStyles(styles)(Navbar)
