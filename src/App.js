import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/Register'
import fire from './firebase'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={    
      isLoggedIn: false, 
      user: '',
      // polls: [] 
      //dont need this until we create dynamic polls
    }    
  }
  
  // Register user to Firebase
  register = (e) => {
    e.preventDefault()
<<<<<<< HEAD
    let email = e.target.userEmail.value
    let password = e.target.userPassword.value
=======
<<<<<<< HEAD
    let user = {
      username: e.target.userName.value,
      email: e.target.userEmail.value,
      userVoted: false
    }
=======
    // let user = {
    //   username: e.target.userName.value,
    //   email: e.target.userEmail.value
    // }
    let email = e.target.userName.value
    let password = e.target.userEmail.value
>>>>>>> eb58b27782f58a65ebab00cbcc23da6cfe1bd8f9
    fire.auth().createUserWithEmailAndPassword(email, password)
      .catch(function (err) {
        console.log('signed up')
      })
  }

  // Log in to app
  login = (e) => {
    let email = e.target.userEmail.value
    let password = e.target.userPassword.value
    let user = {
      email: e.target.userEmail.value,
      password: e.target.userPassword.value
    }
    fire.auth().signInWithEmailAndPassword(email, password)
      .catch(function (error) {
      // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
>>>>>>> ab0ebd5b584cc0a06eba179b08a2055318feef8c
    this.setState({
      isLoggedIn: true,
      user: user
    }, () => {
      console.log('isLoggedIn:', this.state.isLoggedIn)
      console.log(this.state);
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

  triggerLoggedInAlert = () => {
    // (isLoggedIn) 
    // this.setState({
    //   i dunno show bootstra alert for success login
    // })
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

<<<<<<< HEAD
        <Switch>
          {/* Route for sign up */}
          <Route path="/" render={() => {
            return <Home
                      {...this.state}
                      isLoggedIn={this.state.isLoggedIn}
                      login={this.login}
                      hacker={this.hacker}
                      votePoll={this.votePoll}
                      />
          }} />
          <Route path="/register" render={() => {
            return <Register register={this.register}/>
          }} />
        </Switch>

        {/* {(!this.state.isLoggedIn) ? (
          <Signin hacker={this.hacker}/>
=======
        {(!this.state.isLoggedIn) ? (
          <Signin login={this.login} hacker={this.hacker}/>
>>>>>>> eb58b27782f58a65ebab00cbcc23da6cfe1bd8f9
        ):(
          <Main 
            {...this.state}
            votePoll={this.votePoll} />
        )} */}
      </div>
    );
  }
}

export default App;
