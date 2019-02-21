import React, { Component } from 'react';
import { counters } from '../../sampleData';
import Counter from '../Counter/Counter'

export class Counters extends Component {
    state = {
        data: counters
    }

  render() {
      const { data } = this.state;

    return (
      <React.Fragment>
        {data.map(counter => (
            <Counter key={counter.id} id={counter.id} value={counter.value} />
        ))}
      </React.Fragment>
    )
  }
}

export default Counters
