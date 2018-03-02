import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import logo from '../img/logo.png';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

export default class Topbar extends Component {
  render() {
    return (
      <div style={styles.navBar}
        className="container-fluid" >
        <Navbar color="faded" light expand="md">

          <NavbarBrand href="/" >
            <img src={logo} alt="logo" style={styles.logo} />
          </NavbarBrand>
            
            <Nav className="ml-auto" >
              <NavItem>
                {(this.props.isLoggedIn) && 
                //   <NavLink href="/Login" style={styles.login} >
                //   Log out
                // </NavLink>
                  <Link to="/" logout={this.props.logout} style={styles.login}>
                  Log out
                  </Link>
                }
              </NavItem>
            </Nav>
          
        </Navbar>
      </div>
    )
  }
}

const styles = {
  navBar: {
    paddingBottom: 10
  },
  login: {
    color: 'white'
  },
  logo: {
    height: 40,
    width: 40,
  }
}