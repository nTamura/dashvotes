import React, { Component } from 'react'
import { Switch, Route, Link} from 'react-router-dom'
import Results from './Results'
import { Button } from 'reactstrap'

import Winner from './polls/Winner'
import Poll1 from './polls/Poll1'

export default class Home extends Component {
  render() {
    console.log(...this.props);
    
    return (
      <div>
        <p>Welcome {this.props.user}!</p>
        <p style={styles.smallText} >Choose a poll to get started</p>

        <div style={styles.buttonContainer}>

          <Link to="/winner">
            <Button type="button" size="lg" block outline 
              style={styles.button} >
              Go to 'Hackathon Winner'
            </Button>
          </Link>

          <Link to="/Poll1">
            <Button type="button" size="lg" block outline 
              style={styles.button} >
              Go to 'Sample Poll'
            </Button>
          </Link>
          
          <Link to="/results">
            <Button type="button" size="lg" block outline 
              style={styles.buttonResults} >
              See Results
            </Button>
          </Link>
        </div>

        {/* replace all buttons here with /routes, 
        on endppoint should show back button now */}
          {/* <Switch> */}
            <Route path="/winner" render={() => {
              return 
                <Winner {...this.props}
                  votePoll={this.props.votePoll}
                />
            }} />
          {/* </Switch> */}
      </div>
    )
  }
}

const styles={
  smallText: {
    fontSize: '.9rem'
  },
  buttonContainer: {
    // display: 'flex'
  },
  button: {
    borderColor: '#fff',
    borderWidth: 'medium',
    color: '#fff',
    marginBottom: 15
  },
  buttonResults: {
    borderColor: '#fff',
    borderWidth: 'medium',
    color: '#fff',
    
    // bottom: 0,
    // left: 0,
    // right: 0,
    // margin: 15,
    // maxWidth: "100%",
    // position: 'absolute'

    // need to flex display on bottom
  }
}