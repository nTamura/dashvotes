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
// import { Alert } from 'reactstrap';
// import AuthRoute from './components/AuthRoute';
// import jwtDecode from 'jwt-decode';
import {reactLocalStorage} from 'reactjs-localstorage';
class App extends Component {
  constructor(props) {
    super(props);
    this.state={    
      isLoggedIn: false, 
      user: reactLocalStorage.getObject('user'),
      pollData: '', 
      //dont need this until we create dynamic polls

      // isAuthenticated: '',
    }    
  }

  
  componentWillMount() {
    let user = reactLocalStorage.getObject('user')
    (user.hasOwnProperty('name', 'email')) ?
    this.setState({ user }) :
    this.setState({ user: '' }) 
  }
  
  // how to use reactLocalStorage
  // reactLocalStorage.set('user', true);
  // reactLocalStorage.get('user', true);
  // reactLocalStorage.setObject('user', {'test': 'test'});
  // reactLocalStorage.getObject('user');

  // Log in to app
  login = (e) => {
    e.preventDefault()
    let name = e.target.userName.value
    let email = e.target.userEmail.value

    let user = { name, email }
    reactLocalStorage.setObject('user', user)
    this.setState({
      isLoggedIn: true,
      user: reactLocalStorage.getObject('user')
    }, () => {
      console.log(this.state)
      // redirect to /
    })
  }

  logout = (history) => {
    this.setState({
      user: null, 
      isLoggedIn: false
    }, () => {
      console.log('Successfully logged out');
      console.table(this.state);
      // history.push('/register')
    })
  }
 
// 
  triggerLoggedInAlert = () => {
    // return (
    //   <Alert color="primary">
    //     This is a primary alert — check it out!
    //   </Alert>
    // )
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
          {...this.props}
          logout={this.logout} 
          isLoggedIn={this.state.isLoggedIn} />
        
        <div className="container">

          <Switch>

            <Route exact path="/register" 
              render={() => {
              return <Register 
                {...this.props} 
                login={this.login} 
              />
            }} />
            
            <Route exact path="/" 
              render={() => {
              return <Home 
                {...this.state}
                {...this.props}
                isLoggedIn={this.state.isLoggedIn}
                login={this.login}
                hacker={this.hacker}
                votePoll={this.votePoll}
              />
            }} />
            

            {/* <AuthRoute
              isAuthenticated={this.isAuth()}
              path="/questions"
              exact
              component={QuestionIndexPage}
            />
            <AuthRoute
              isAuthenticated={this.isAuth()}
              path="/questions/new"
              component={QuestionNewPage}
            />
            <AuthRoute
              isAuthenticated={this.isAuth()}
              path="/questions/:id"
              component={QuestionShowPage}
            /> */}
            {/*
              To match all routes that aren't matched in
              a Switch component, create a Route without
              a `path` prop. We can use it to implement a 404
              page.
             */}
            {/* <Route component={} /> */}
          </Switch>







          {/* <Switch>
            <Route path="/register" render={() => {
              return <Register register={this.register} {...this.props} />
            }} />
            <Route exact path="/" render={() => {
              return <Home
                {...this.state}
                {...this.props}
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
          </Switch>  */}

        </div>
      </div>
    );
  }
}

export default App;
