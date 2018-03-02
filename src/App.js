import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Main from './components/Main'
import Signin from './components/Signin'
import fire from './firebase'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      isLoggedIn: false, 
      user: '',
      polls: []
    }    
  }


  componentWillMount(){
    /* Create reference to polls in Firebase */

    // let pollsRef = fire.database()
    // .ref('polls').orderByKey().limitToLast(100);
    // pollssRef.on('child_added', snapshot => {
    //   /* Update React state when polls is added at Firebase Database */
    //   let polls = { text: snapshot.val(), id: snapshot.key };
    //   this.setState({ pollss: [polls].concat(this.state.polls) });
    // })
  }
  votePoll(e){
    e.preventDefault();
    console.log(e);
    
    /* Send the polls to Firebase */
    // fire.database().ref('polls').push( vote );
    // this.inputEl.value = ''; // <- clear the input
  }


  render() {

    return (
      <div className="App">
        <Navbar />
      <Switch>
        <Route exact path="/" render={() => {
          return <Welcome />
        }} />
        <Route path="/main" render={() => {
          return <Main votePoll={this.votePoll} />
        }} />
        <Route path="/signin" render={() => {
          return <Signin />
        }} />
      </Switch>

      </div>
    );
  }
}

export default App;
