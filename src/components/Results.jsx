import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import fire from '../firebase'


export default class Results extends Component {

copmponentDidMount(){
  // get data hre,
  fire.database().ref('/polls').once('winningVote').then(function(snapshot) {
    
    console.log(snapshot);
    
    // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
  });
}

  render() {

    // const getData

    const data = {
      labels: ["Noodle Babies", "The Unicorn Hub", "Hackstreet Boiz"],
      datasets: [
        {
          label: "Votes",
          fillColor: "rgba(100, 100, 185, 1)",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          data: [20, 13, 5]
        }
      ]
    };

    return (
      <div>
        <p>The results are in!</p>
        <Bar
          data={data}
          width={150}
          height={75}
          options={{
            maintainAspectRatio: true
          }}
        />
      </div>
    )
  }
}
