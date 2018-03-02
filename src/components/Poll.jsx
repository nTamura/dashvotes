import React, { Component } from 'react'
import fire from '../firebase'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
// Main page gets data from db
// maps out polls, dynamic route '/:pollId'
// for now static dummy data 

export default class Poll extends Component {
  // capture state? 
  // save state as object and add event handler to pass back 
  // push object to db 
  constructor(props) {
    super(props);
    this.state={
      userId: '',
      userVote: ''
    }
  }
  

  handleSubmit = (e) => {
    e.preventDefault()
    // let vote = this.state
console.log(e.target);

    this.setState({
      userId: 'Nic',
      userVote: ''
    })
    // console.log(this.state);
    
    // this.props.votePoll(e)
  }

  render() {
    return (
      <div>
        <h1>Overall Best Vote</h1>
        <hr/>
        {/* <Form onClick={()=>{this.props.votePoll(e)}}>
          <input type="text" name="username" placeholder="What's your name?" /> */}
      <Form 
        style={styles.form}
        // onSubmit={(e)=>{this.props.votePoll(e)}}
        onSubmit={(e)=>{this.handleSubmit(e)}}
      >
        <FormGroup tag="fieldset">
          <p>Vote for the team that demonstrated </p>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio" value="option1" />{' '}
              Noodle Babies
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio" value="option2" />{' '}
              Unicorn Hub
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio" value="option3" />{' '}
              Hackstreet Boys
            </Label>
          </FormGroup>
          <Button type="submit">Submit Vote</Button>
        </FormGroup>
      </Form>

      </div>
    )
  }
}
 const styles = {
   form: {

     textAlign: 'left',
     fontSize: 20,
     padding: 30
   }
 }