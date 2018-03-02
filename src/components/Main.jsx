import React, { Component } from 'react'
import { Switch, Route, Link} from 'react-router-dom'
import Poll from './Poll'
import Results from './Results'

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1>hello name</h1>

        <Link to="/main/polls">
          <button>POLLS boi</button>
        </Link>
        <Link to="/main/results">
          <button>RESULTS boi</button>
        </Link>

        <Switch>
          <Route path="/main/polls" render={() => {
            return <Poll votePoll={this.props.votePoll} />
          }} />
          <Route path="/main/results" render={() => {
            return <Results />
          }} />
        </Switch>
      </div>
    )
  }
}