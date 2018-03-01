import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Main from './components/Main'
import Signup from './components/Signup'
import Login from './components/Login'
import fire from './initialize'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      isLoggedIn: false
    }    
  }

  render() {

    return (
      <div className="App">
<<<<<<< HEAD
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="">
            <img src="/assets/brand/bootstrap-solid.svg" 
                 width="30" 
                 height="30" 
                 class="d-inline-block align-top" 
                 alt="home" />
          </a>
        </nav>
        {/* <form onSubmit={this.addMessage.bind(this)}>
        <input type="text" ref={ el => this.inputEl = el }/>
        <input type="submit"/>
        <ul>
          {renderMsg}
        </ul>
      </form> */}
=======
        <header className="App-header">
        <h2 style={'float:left;'}>Voting app</h2>
          <button className="loginBtn">Btn</button>
        </header>

>>>>>>> 99704ffa68d7c41b90bc3b0c1eaa80db5b252093

      <Switch>
        <Route exact path="/" render={() => {
          return <Welcome />
        }} />
        <Route path="/main" render={() => {
          return <Main />
        }} />
        <Route path="/signup" render={() => {
          return <Signup />
        }} />
        <Route path="/login" render={() => {
          return <Login />
        }} />
      </Switch>

      </div>
    );
  }
}

export default App;
