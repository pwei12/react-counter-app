import React from 'react'

function Total(props) {
  return (
      <React.Fragment>
          <p>Total number of counters: {props.numCounters}</p>
          <p>Sum of all values: {props.totalCount}</p>
      </React.Fragment>
  )
}

export default Total
