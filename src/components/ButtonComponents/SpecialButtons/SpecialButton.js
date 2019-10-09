import React from "react";
import Specials from "../SpecialButtons/Specials";

const SpecialButton = props => {

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="special_button">
        {props.button}
      </button>
    </>
  );
};
export default SpecialButton;