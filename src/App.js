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
      messages: []
    }    
  }
  
  
  // componentWillMount() {
  //   let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(messagesRef.on('child_added', snapshot => {
  //     let message = {
  //       text: snapshot.val(), 
  //       id: snapshot.key()
  //     }
  //     this.setState({
  //       messages: [message].concat(this.state.messages)
  //     })
  //   }))
  // }
  
  // addMessage(e){
  //   e.preventDefault();
  //   fire.database().ref('messages').push(this.inputEl.value)
  //   this.inputEl.value = ''
  // }

  render() {
    // let renderMsg = this.state.messages.map((message) => {
    //   return <li key={message.id}>{message.text}</li> 
    // })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
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
        <Route path="/main" render={() => {
          return <Main />
        }} />
      </Switch>

      </div>
    );
  }
}

export default App;
