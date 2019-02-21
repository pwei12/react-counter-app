import React, { Component } from 'react';

import Counter from '../Counter/Counter';


export class Counters extends Component {
  

  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
            <button className="btn btn-success" onClick={this.props.handleReset}> 
                Reset 
            </button>
            {data.length === 0 && <h3>No more counter.</h3> }
            {data.map(counter => (
            <Counter 
                key={counter.id} 
                id={counter.id} 
                value={counter.value} 
                handleDelete={this.props.handleDelete}
                handleIncrement={this.props.handleIncrement}
                handleDecrement={this.props.handleDecrement} />
        ))}
            
      </React.Fragment>
    )
  }
}

export default Counters
