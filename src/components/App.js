import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import { Route, Switch } from 'react-router-dom'
import Navbar from 'components/Navigation/Navbar'
import Dashboard from 'components/Views/Dashboard'
import Create from 'components/Views/Create'
// import Edit from 'components/Views/Edit'
import Results from 'components/Views/Results'
import Trending from 'components/Views/Trending'
// import Activity from 'components/Views/Activity'
import Profile from 'components/Views/Profile'
import PollPage from 'components/Views/Polls'
import NotFound from 'components/Views/NotFound'
import Private from 'components/Common/Private'

import Alert from 'components/Common/Alert'

function App({ classes, ...props }) {
  return (
    <div className="container">
      <Navbar />
      <div className={classes.body}>
        <Switch>
          <Private exact path="/" component={Dashboard} />
          <Private exact path="/trending" component={Trending} />
          <Private exact path="/create" component={Create} />
          <Private exact path="/results" component={Results} />
          <Route exact path="/poll/:id" component={PollPage} />
          {/* <Private exact path="/edit/:id" component={Edit} /> */}
          <Private exact path="/profile" component={Profile} />
          {/* <Private exact path="/activity" component={Activity} /> */}
          <Route component={NotFound} />
        </Switch>
      </div>
      <Alert />
    </div>
  )
}

const styles = {
  root: {},
  body: { flex: 1 },
}

export default withStyles(styles)(App)
