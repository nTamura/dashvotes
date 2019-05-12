import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import { Link, Route, Switch } from 'react-router-dom'
import Navbar from 'components/Navigation/Navbar'
import Dashboard from 'components/Views/Dashboard'
import Active from 'components/Views/Active'
import Create from 'components/Views/Create'
// import Edit from 'components/Views/Edit'
// import Results from 'components/Views/Results'
import Trending from 'components/Views/Trending'
// import Activity from 'components/Views/Activity'
// import Profile from 'components/Views/Profile'

import NotFound from 'components/Views/NotFound'

function App({ classes }) {
  return (
    <div className="container">
      <Navbar />
      <div className={classes.body}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/create" component={Create} />
          {/* <Route exact path="/edit" component={Edit} /> */}
          <Route exact path="/active" component={Active} />
          {/* <Route exact path="/results" component={Results} /> */}
          {/* <Route exact path="/profile" component={Profile} /> */}
          {/* <Route exact path="/activity" component={Activity} /> */}
          <Route exact path="/trending" component={Trending} />
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
