import React, { Component } from 'react'

export class Counter extends Component {
  
    evaluateClass = () => {
      // const existingClassName = "badge badge-"
     // return this.state.value > 0 ? existingClassName + "primary" : existingClassName + "warning";
      
      return this.props.value > 0 ? "primary" : "warning";
    }

  render() {
    return (
      <React.Fragment>
        <h2>
          {/* </h2><span className={this.evaluateClass()}> */}

          <span className={`badge badge-${this.evaluateClass()}`}>
            {this.props.value}
          </span>
        </h2>
        <button className= "btn btn-dark" onClick={() => this.props.handleIncrement(this.props.id)}> + </button>
        <button className="btn btn-dark" onClick={() => this.props.handleDecrement(this.props.id)}> - </button>
        <button onClick={() => this.props.handleDelete(this.props.id)} className="btn btn-danger">Delete</button>
      </React.Fragment>

    )
  }
}

export default Counter
