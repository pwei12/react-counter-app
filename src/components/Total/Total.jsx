import React from 'react'

function Total(props) {
  return (
      <React.Fragment>
          <h3>Number of counters: {props.numCounters}</h3>
          <h3>Total counts: {props.totalCount}</h3>
      </React.Fragment>
  )
}

export default Total
