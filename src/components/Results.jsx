import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

export default class Results extends Component {
  render() {
    return (
      <div>
        <Bar
          // data={data}
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
