import React, { Component } from 'react'
import Main from './Main'
import Signin from './Signin'

export default class Home extends Component {
  render() {
    console.log(...this.props);
    
    return (
      <div>
        <h1>this is Home</h1>
          {(!this.props.isLoggedIn) ? (
            <Signin login={this.props.login} hacker={this.props.hacker}/>
          ):(
          <Main 
            {...this.props}
            votePoll={this.props.votePoll} />
          )}
      </div>
    )
  }
}