import React from "react";

const OperatorButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operators_button">{props.operators.value}</button>
    </>
  )
}
export default OperatorButton;