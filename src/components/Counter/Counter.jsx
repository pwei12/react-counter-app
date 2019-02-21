import React, { Component } from 'react'

export class Counter extends Component {
    state = { id: 1, value: 0 }

    handleIncrement = () => {
      const newValue = this.state.value + 1;
      this.setState({value: newValue});
      // this.setState({value: this.state.value + 1})
    }
    handleDecrement = () => {
      const newValue = this.state.value - 1;
      this.setState({ value: newValue });
    }


  render() {
    return (
      <React.Fragment>
        <h2>
          <span className="badge badge-secondary">
            {this.state.value}
          </span>
        </h2>
        <button className= "btn btn-dark" onClick={this.handleIncrement}> + </button>
        <button className="btn btn-dark" onClick={this.handleDecrement}> - </button>
      </React.Fragment>

    )
  }
}

export default Counter
