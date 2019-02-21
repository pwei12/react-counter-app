import React, { Component } from 'react'

export class Counter extends Component {
    state = { id: 1, value: 0 }

  render() {
    return (
      <React.Fragment>
        <h2>
          <span className="badge badge-secondary">
            {this.state.value}
          </span>
        </h2>
        
      </React.Fragment>

    )
  }
}

export default Counter
