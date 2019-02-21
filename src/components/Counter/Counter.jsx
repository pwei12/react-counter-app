import React from 'react'

export default function Counter(props) {
  const { value, id, handleIncrement, handleDecrement, handleDelete} = props;
  const evaluateClass = () => {
    // const existingClassName = "badge badge-"
    // return this.state.value > 0 ? existingClassName + "primary" : existingClassName + "warning";

    return value > 0 ? "primary" : "warning";
  }

  return (
    <React.Fragment>
      <h2>
        {/* </h2><span className={this.evaluateClass()}> */}

        <span className={`badge badge-${evaluateClass()}`}>
          {value}
        </span>
      </h2>
      <button className="btn btn-dark" onClick={() => handleIncrement(id)}> + </button>
      <button className="btn btn-dark" onClick={() => handleDecrement(id)}> - </button>
      <button onClick={() => handleDelete(id)} className="btn btn-danger">Delete</button>
    </React.Fragment>
  )
}


