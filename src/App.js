import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Topbar from './components/Topbar'
import Home from './components/Home'
import Register from './components/Register'
import Winner from './components/polls/Winner'
import Results from './components/Results'
import Signin from './components/Signin'
import fire from './firebase'
import './App.css';
import { Alert } from 'reactstrap';
class App extends Component {
  constructor(props) {
    super(props);
    this.state={    
      isLoggedIn: false, 
      user: '',
      pollData: '', 
      //dont need this until we create dynamic polls

      // isAuthenticated: '',
    }    
  }
  
  // Register user to Firebase, login if registered
  register = (e) => {
    e.preventDefault()
    let email = e.target.userEmail.value
    let password = e.target.userPassword.value
    let user = { email, password }

    console.table([{
      email, password
    }])
    // fire.auth().createUserWithEmailAndPassword(email, password)
    //   .catch((err) => {
    //     console.log(err.code, err.message)
    //   })
    // this.setState({
    //   user: email, 
    //   isLoggedIn: true
    // }, () => {
    //   console.log(this.state);
    //   console.log(email, 'is logged in');
    //   this.triggerLoggedInAlert()
    // })
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
    return (
      <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
    )
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
      console.log(vote, 'Successfully posted')
      
    )
  }

  getVotes = () => {
    // fire.database.ref('polls/')
    // get POLLNAME.pollId.userVote.reduce
    // push to each array, display to results 
  }

  getPollData = () => {
    // this.state.pollData
  }

  render() {

    return (
      <div className="App">
        <Topbar 
          logout={this.logout} 
          isLoggedIn={this.state.isLoggedIn} />
        
        <div className="container">
          {(this.state.isLoggedIn) ? (
            
          <Switch>
            <Route exact path="/" render={() => {
              return <Home
                {...this.state}
                isLoggedIn={this.state.isLoggedIn}
                login={this.login}
                hacker={this.hacker}
                votePoll={this.votePoll}
                />
              }} />
              <Route path="/results" render={() => {
                return <Results pollData={this.state.pollData}/>
              }} />
              <Route path="/winner" render={() => {
                return <Winner {...this.state} votePoll={this.votePoll}/>
              }} />
          </Switch> 
          ) : (
            <Register register={this.register} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
