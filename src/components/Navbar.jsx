import React, { Component } from 'react'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class Navbar extends Component {
  render() {

    const styles = {
      navBar: {
        background: '#BA68C8',
        padding: '1.5rem'
      },
<<<<<<< HEAD
      backIcon: {
        // height: '5rem'
=======
      hiddenIcon: {
        visibility: 'hidden',
        height: '5rem',
        cursor: 'default'
      },
      rightButton: {
        fontSize: '1.5em',
        width: '10rem'
>>>>>>> bf21add83a59230c392bf75ed75b5040fc550a40
      }
    }

    console.log('isLoggedIn:', this.props.isLoggedIn)
    return (
      <div className="container-fluid" style={styles.navBar}>
        <nav className="navbar navbar-light">
        
        {/* if logged in */}
          <Link to="/">
<<<<<<< HEAD
          <FontAwesomeIcon size='2x' 
              style={styles.backIcon}
            icon="caret-square-left"/>
=======
            <img src="./img/arrow.svg" 
                 className="d-inline-block align-top" 
                 style={styles.hiddenIcon}
                 alt="home" />
>>>>>>> bf21add83a59230c392bf75ed75b5040fc550a40
          </Link>

        {/* else  */}

          <Link to="/signin">
            <Button outline color="info" style={styles.rightButton}>{(!this.props.isLoggedIn) ? "Log In" : "Log Out"}</Button>{' '}
          </Link>

        </nav>
      </div>
    )
  }
}