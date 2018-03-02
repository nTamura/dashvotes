import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Main from './components/Main'
import Signin from './components/Signin'
import fire from './initialize'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      isLoggedIn: false,
      fireRedirect: false
    }    
  }

  submitForm = (ev) => {
    ev.preventDefault()
    this.setState({
      fireRedirect: true
    })
  }

  render() {

    return (
      <div className="App">
        <Navbar isLoggedIn={this.state.isLoggedIn}/>
        {/* <form onSubmit={this.addMessage.bind(this)}>
        <input type="text" ref={ el => this.inputEl = el }/>
        <input type="submit"/>
        <ul>
          {renderMsg}
        </ul>
      </form> */}
      <Switch>
        <Route exact path="/" render={() => {
          return <Welcome />
        }} />
        <Route path="/signin" render={() => {
          return <Signin submitForm={this.submitForm}
                         fireRedirect={this.state.fireRedirect}/>
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
