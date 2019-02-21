import React, { Component } from 'react'
import Counters from './components/Counters/Counters'
import { counters } from './sampleData';
import Total from './components/Total/Total';

export class App extends Component {

  state = {
    data: counters //array imported from sampleData
  }

  handleDelete = (counterId) => {
    const filteredData = this.state.data.filter(counter => counter.id !== counterId);
    this.setState({ data: filteredData });
  }

  handleReset = () => {
    const newData = this.state.data;
    newData.map(counter => {
      counter.value = 0;
    })
    this.setState({ data: newData })
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
    this.settingStateData(counterId, -1);
  }

  render() {
    const numCounters = this.state.data.length;
    const totalCount = this.state.data.reduce((acc, element) => {return acc+element.value}, 0)
    return (
      <React.Fragment>
        <h1>Counter Lab</h1>
        <Counters 
          data={this.state.data}
          handleDelete={this.handleDelete} 
          handleDecrement={this.handleDecrement}
          handleIncrement={this.handleIncrement}
          handleReset={this.handleReset}
        />
        <Total 
          numCounters={numCounters} 
          totalCount={totalCount}
        />
      </React.Fragment>
    )
  }
}

export default App
