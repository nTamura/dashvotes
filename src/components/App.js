import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import { Link, Route, Switch } from 'react-router-dom'
import Navbar from 'components/Navigation/Navbar'
import Dashboard from 'components/Views/Dashboard'
import Create from 'components/Views/Create'

import NotFound from 'components/Views/NotFound'

function App({ classes }) {
  return (
    <div className="container">
      <Navbar />
      <div className={classes.body}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/create" component={Create} />
          {/* <Route
            path="/about"
            render={props => <About {...props} extra={someVariable} />}
          /> */}
          <Route component={NotFound} />
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
