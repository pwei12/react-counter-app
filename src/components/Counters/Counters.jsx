import React, { Component } from 'react';
import { counters } from '../../sampleData';
import Counter from '../Counter/Counter'

export class Counters extends Component {
    state = {
        data: counters //array imported sampleData
    }

    handleDelete = (counterId) => {
        const filteredData = this.state.data.filter(counter => counter.id !== counterId);
        this.setState({data: filteredData});
    }

  render() {
      const { data } = this.state;

    return (
      <React.Fragment>
        {data.map(counter => (
            <Counter key={counter.id} id={counter.id} value={counter.value} handleDelete={this.handleDelete} />
        ))}
      </React.Fragment>
    )
  }
}

export default Counters
