import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import { Link } from 'react-router-dom'

function App({ classes }) {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <div className={classes.body}>
        <header className="App-header">
          <p>Dashvotes</p>
        </header>
      </div>
      <footer>footer</footer>
    </>
  )
}

const styles = {
  root: {},
  body: {
    flex: 1,
  },
}

export default withStyles(styles)(App)
