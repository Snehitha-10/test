import React, { Component } from 'react'

export default class ClassbasedExample extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            count:0
        };
    }
  render() {
    return (
      <div>
        <h2>Count:{this.state.count}</h2>

      </div>
    )
  }
}
