import React, { Component } from 'react'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {

    const styles = {
      navBar: {
        background: '#BA68C8',
        padding: '1.5rem'
      },
      hiddenIcon: {
        visibility: 'hidden',
        height: '5rem',
        cursor: 'default'
      },
      rightButton: {
        fontSize: '1.5em',
        width: '10rem'
      }
    }

    console.log(this.props.isLoggedIn)
    return (
      <div className="container-fluid" style={styles.navBar}>
        <nav className="navbar navbar-light">
          <Link to="/">
            <img src="./img/arrow.svg" 
                 className="d-inline-block align-top" 
                 style={styles.hiddenIcon}
                 alt="home" />
          </Link>
          <Link to="/signin">
            <Button outline color="info" style={styles.rightButton}>{(!this.props.isLoggedIn) ? "Log In" : "Log Out"}</Button>{' '}
          </Link>
        </nav>
      </div>
    )
  }
}