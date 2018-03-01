import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Poll from './Poll'
import Results from './Results'

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          this is main
        </h1>

        <Switch>
          <Route path="/main/poll" render={() => {
            return <Poll />
          }} />
          <Route path="/main/results" render={() => {
            return <Results />
          }} />
        </Switch>
      </div>
    )
  }
}