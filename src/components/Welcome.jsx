import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {

    const styles = {
      landing: {
        background: '#E1BEE7'
      }
    }

    return (
      <div style={styles.landing}>
        <h1>DASHVOTES</h1>
        <img src="./img/bolt.png" alt="logo"/>
        <p>Please sign in to continue</p>
      </div>
    )
  }
}