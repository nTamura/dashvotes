import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class Navbar extends Component {
  render() {

    const styles = {
      navBar: {
        background: '#BA68C8',
        padding: '1.5rem'
      },
      backIcon: {
        // height: '5rem'
      }
    }

    console.log('isLoggedIn:', this.props.isLoggedIn)
    return (
      <div className="container-fluid" style={styles.navBar}>
        <nav className="navbar navbar-light">
        
        {/* if logged in */}
          <Link to="/">
          <FontAwesomeIcon size='2x' 
              style={styles.backIcon}
            icon="caret-square-left"/>
          </Link>

        {/* else  */}

          <Link to="/signin">
            <button>{(this.props.isLoggedIn) ? "Sign Out" : "Sign In"}</button>
          </Link>

        </nav>
      </div>
    )
  }
}