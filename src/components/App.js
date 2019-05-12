import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import { Link, Route, Switch } from 'react-router-dom'
import Navbar from 'components/Navigation/Navbar'
import Dashboard from 'components/Views/Dashboard'

function App({ classes }) {
  return (
    <div className="container">
      <Navbar />
      <div className={classes.body}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          {/* <Route
            path="/about"
            render={props => <About {...props} extra={someVariable} />}
          /> */}
        </Switch>
      </div>
      <footer>footer</footer>
    </div>
  )
}

const styles = {
  root: {},
  body: {
    flex: 1,
  },
}

export default withStyles(styles)(App)
