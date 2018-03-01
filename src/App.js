import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Main from './components/Main'
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
        <header className="App-header">
        <h2 style={'float:left;'}>Voting app</h2>
          <button className="loginBtn">Btn</button>
        </header>


      <Switch>
        <Route exact path="/" render={() => {
          return <Welcome />
        }} />
        <Route path="/main" render={() => {
          return <Main />
        }} />
      </Switch>

      </div>
    );
  }
}

export default App;
