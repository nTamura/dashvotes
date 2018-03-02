import React, { Component } from 'react'
import fire from '../firebase'

// Main page gets data from db
// maps out polls, dynamic route '/:pollId'
// for now static dummy data 

export default class Poll extends Component {
  render() {
    return (
      <div>
        <h1>poll poop</h1>
        <hr/>
        <form>
          <input type="text" name="username" placeholder="What's your name?" />
          <input type="text" name="currentItem" placeholder="What are you bringing?" />
          <button>Add Item</button>
        </form>

      </div>
    )
  }
}
