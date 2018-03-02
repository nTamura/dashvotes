import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {

    const styles = {
      navBar: {
        background: '#BA68C8',
        padding: '1.5rem'
      },
      backIcon: {
        // visibility: 'hidden',
        height: '5rem'
      }
    }

    console.log(this.props.isLoggedIn)
    return (
      <div className="container-fluid" style={styles.navBar}>
        <nav className="navbar navbar-light">
          <Link to="/">
            <img src="./img/check.svg" 
                 className="d-inline-block align-top" 
                 style={styles.backIcon}
                 alt="home" />
          </Link>
          <Link to="/signin">
            <button>{(this.props.isLoggedIn) ? "Sign Out" : "Sign In"}</button>
          </Link>
        </nav>
      </div>
    )
  }
}