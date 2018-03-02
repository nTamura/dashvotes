import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class Navbar extends Component {
  render() {

    return (
      <div 
        className="container-fluid" 
        style={styles.navBar}>

        <nav className="navbar navbar-light">
        
        {/* if logged in */}

        {/* why the fuck does this not appear until you click login */}
        {/* only show if you are on /:something, not on root */}
          <Link to="/">
          <FontAwesomeIcon size='2x' 
              style={styles.backIcon}
            icon="caret-square-left"/>
          </Link>

        {(this.props.isLoggedIn) &&
          <Link to="/">
            <button 
              style={styles.login}
              onClick={this.props.logout}
              >
              Logout
            </button>
          </Link>
          }

        </nav>
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
    float: 'right'
  }
}