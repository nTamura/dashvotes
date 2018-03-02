import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Signin from './components/Signin'
import fire from './firebase'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      fireRedirect: false,      
      isLoggedIn: false, 
      user: '',
      // polls: [] 
      //dont need this until we create dynamic polls
    }    
  }

  login = (e) => {
    e.preventDefault()
    let user = {
      username: e.target.userName.value,
      email: e.target.userEmail.value
    }
    this.setState({
      isLoggedIn: true, 
      user: user,
    }, () => {
      console.log('isLoggedIn:', this.state.isLoggedIn)
      console.log(this.state);
      // need to store login to local storage 
    })
  }
  hacker = () => {
    // e.preventDefault()
    let user = {
      username: 'Hacker',
      email: "hacking@1337.com"
    }
    this.setState({
      isLoggedIn: true, 
      user: user,
    }, () => {
      console.log('welcome hack0r')
      console.log(this.state);
    })
  }

  logout = () => {
    this.setState({
      user: null, 
      isLoggedIn: false
    }, () => {
      console.log('Successfully logged out');
      console.log(this.state);
    })
  }

  submitForm = (ev) => {
    ev.preventDefault()
    this.setState({
      fireRedirect: true
    })
  }

  votePoll = (vote) => {
    fire.database().ref('polls/' + vote.pollId).push( vote )
    .then(
      console.log(vote, 'success')
    )
  }

  getVotes = () => {
    // fire.database.ref('polls/')
    // get POLLNAME.pollId.userVote.reduce
    // push to each array, display to results 
  }


  render() {

    return (
      <div className="App">
        <Navbar 
          logout={this.logout} 
          isLoggedIn={this.state.isLoggedIn} />
        
        {(!this.state.isLoggedIn) ? (
          <Signin login={this.login} hacker={this.hacker}/>
        ):(
          <Main 
            {...this.state}
            votePoll={this.votePoll} />
        )}
      </div>
    );
  }
}

export default App;
