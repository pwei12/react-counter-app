import React, { Component } from 'react'

export class Counter extends Component {
    state = { 
      id: this.props.id, 
      value: this.props.value }

    handleIncrement = () => {
      const newValue = this.state.value + 1;
      this.setState({value: newValue});
      // this.setState({value: this.state.value + 1})
    }
    handleDecrement = () => {
      const newValue = this.state.value - 1;
      this.setState({ value: newValue });
    }

    evaluateClass = () => {
      // const existingClassName = "badge badge-"
     // return this.state.value > 0 ? existingClassName + "primary" : existingClassName + "warning";
      
      return this.state.value > 0 ? "primary" : "warning";
    }

  render() {
    return (
      <React.Fragment>
        <h2>
          {/* </h2><span className={this.evaluateClass()}> */}

          <span className={`badge badge-${this.evaluateClass()}`}>
            {this.state.value}
          </span>
        </h2>
        <button className= "btn btn-dark" onClick={this.handleIncrement}> + </button>
        <button className="btn btn-dark" onClick={this.handleDecrement}> - </button>
        <button onClick={() => this.props.handleDelete(this.state.id)} className="btn btn-danger">Delete</button>
      </React.Fragment>

    )
  }
}

export default Counter
