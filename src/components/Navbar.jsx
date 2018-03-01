import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="/">
            <img src="/assets/brand/bootstrap-solid.svg" 
                 width="30" 
                 height="30" 
                 class="d-inline-block align-top" 
                 alt="home" />
          </a>
          <Link to="/main">
            <button>log in</button>
          </Link>
        </nav>
      </div>
    )
  }
}