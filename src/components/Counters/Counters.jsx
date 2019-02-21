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

    handleReset = () => {
        const newData = this.state.data;
        newData.map(counter => {
            counter.value = 0;
        })
        this.setState({data: newData})
    }

    settingStateData = (counterId, operator) => {
        const copy = [...this.state.data];
        copy.find(element => element.id === counterId).value += operator;
        this.setState({ data: copy });
    }

    handleIncrement = counterId => {
        // const copy = [...this.state.data];
        // copy.find(counter => counter.id === counterId).value += 1;
        // this.setState({ data: copy });
        this.settingStateData(counterId, 1);
    }

    handleDecrement = counterId => {
        this.settingStateData( counterId, -1 );
    }

  render() {
    const { data } = this.state;

    return (
      <React.Fragment>
            <button className="btn btn-success" onClick={this.handleReset}> Reset </button>
        {/* {data.length === 0 && <h3>No more counter.</h3> } */}
            {data.length === 0 ? <h3>No more counter.</h3> : data.map(counter => (
            <Counter 
                key={counter.id} 
                id={counter.id} 
                value={counter.value} 
                handleDelete={this.handleDelete}
                handleIncrement={this.handleIncrement}
                handleDecrement={this.handleDecrement} />
        ))}
      </React.Fragment>
    )
  }
}

export default Counters
