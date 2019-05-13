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
// import Profile from 'components/Views/Profile'
import PollPage from 'components/Common/Polls/PollPage'

import NotFound from 'components/Views/NotFound'

function App({ classes, ...props }) {
  return (
    <div className="container">
      <Navbar />
      <div className={classes.body}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/results" component={Results} />

          {/* <Route exact path="/edit/:id" component={Edit} /> */}
          <Route exact path="/poll/:id" component={PollPage} />

          {/* <Route exact path="/profile" component={Profile} /> */}
          {/* <Route exact path="/activity" component={Activity} /> */}

          {/* <Route
            path="/about"
            render={props => <About {...props} extra={someVariable} />}
          /> */}

          <Route component={NotFound} />
        </Switch>
      </div>
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
