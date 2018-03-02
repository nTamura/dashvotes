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
      polls: [] 
      //dont need this until we create dynamic polls
    }    
  }

  login = (e) => {
    e.preventDefault
    console.log(e.target);
    
    // this.setState({
    //   isLoggedIn: !this.state.isLoggedIn, 
    //   user: 'Poop',
    // }, () => {
    //   console.log('isLoggedIn:', this.state.isLoggedIn)
    //   console.log('YOU ARE LOGGED IN');
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
          login={this.login} 
          isLoggedIn={this.state.isLoggedIn} />
        {/* <form onSubmit={this.addMessage.bind(this)}>
        <input type="text" ref={ el => this.inputEl = el }/>
        <input type="submit"/>
        <ul>
          {renderMsg}
        </ul>
      </form> */}
        {(!this.state.isLoggedIn) ? (
          <Signin />
        ):(
          'you are logged in' 
          // render switch here, main as '/'
        )
      }
      {/* <Switch>
        {(!this.state.isLoggedIn) ? (
          <Route path="/" render={() => {
            <Signin 
              submitForm={this.submitForm}
              fireRedirect={this.state.fireRedirect}/>
          }} />
        ) : (
        <Route exact path="/" render={() => {
          return <Welcome />
          }} />
        )}
  
        <Route path="/main" render={() => {
          return <Main votePoll={this.votePoll} />
        }} />
      </Switch> */}

      </div>
    );
  }
}

export default App;
