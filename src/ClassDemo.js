import React, { Component } from 'react'

export default class ClassDemo extends Component {
  render() {
    return (
      <div>
      <button onClick={handleIncrement}>-</button>
      {this.state.count1}
      <button onClick={handleDecrement}>+</button>
      </div>
    )
  }
}
