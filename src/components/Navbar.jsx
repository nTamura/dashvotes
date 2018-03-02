import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import logo from '../logo.png';

export default class Navbar extends Component {
  render() {
    return (
      <div style={styles.navBar}
        className="container-fluid" >
        
        {(this.props.isLoggedIn) &&
          <nav className="navbar navbar-light">
        
          <Link to="/" >
            {/* <FontAwesomeIcon size='2x' 
              style={styles.backIcon}
              icon="caret-square-left"/> */}
              <button>
                back
              </button>
              
          </Link>

            <Link to="/">
              <button 
                style={styles.login}
                onClick={this.props.logout}>
                Logout
              </button>
            </Link>
        </nav>
        }
        </div>
    )
  }
}

const styles = {
  navBar: {
    background: '#BA68C8',
    padding: '1.5rem'
  },
  backIcon: {
    float: 'left'
  },
  login: {
    heigt: 40,
    float: 'right'
  },
  logo: {
    float: 'center'
  }

}