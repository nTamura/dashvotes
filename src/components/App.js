import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import { Route, Switch } from 'react-router-dom'
import Navbar from 'components/Navigation/Navbar'
// import Entry from 'components/Auth'
import Dashboard from 'components/Views/Dashboard'
import Create from 'components/Views/Create'
// import Edit from 'components/Views/Edit'
import Results from 'components/Views/Results'
import Trending from 'components/Views/Trending'
// import Activity from 'components/Views/Activity'
// import Profile from 'components/Views/Profile'
import PollPage from 'components/Common/Polls/PollPage'
import NotFound from 'components/Views/NotFound'
import Private from 'components/Common/Private'

import Alert from 'components/Common/Alert'
// import AuthContext from 'context/AuthContext';

function App({ classes, ...props }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Firebase.auth.onAuthStateChanged(user => {
    //   user ? setUser(user) : setUser(null)
    // })
  }, [user])

  return (
    <div className="container">
      <Navbar />
      <div className={classes.body}>
        <Switch>
          <Private exact path="/" component={Dashboard} />
          <Private exact path="/trending" component={Trending} />
          <Private exact path="/create" component={Create} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/poll/:id" component={PollPage} />

          {/* <Route exact path="/edit/:id" component={Edit} /> */}
          {/* <Route exact path="/profile" component={Profile} /> */}
          {/* <Route exact path="/activity" component={Activity} /> */}

          <Route component={NotFound} />
        </Switch>
      </div>
      <Alert />
      {/* move alert component here for global error handling */}
    </div>
  )
}

const styles = {
  root: {},
  body: {
    flex: 1,
    marginBottom: 40,
  },
}

export default withStyles(styles)(App)
