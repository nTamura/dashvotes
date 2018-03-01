import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>this is welcome</h1>
        <button type="button">Signup</button>
        <button type="button">Login</button>
      </div>
    )
  }
}