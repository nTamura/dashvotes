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
      labels: ["Team1", "Team2", "Team3"],
      datasets: [
        {
          label: "Nic dataset",
          fillColor: "rgba(100, 100, 185, 1)",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "Ant dataset",
          fillColor: "rgba(100, 100, 185, 1)",
          strokeColor: "rgba(151,187,205,0.8)",
          highlightFill: "rgba(151,187,205,0.75)",
          highlightStroke: "rgba(151,187,205,1)",
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    return (
      <div>
        <p>The results are in!</p>
        <Bar
          data={data}
          width={100}
          height={500}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    )
  }
}
