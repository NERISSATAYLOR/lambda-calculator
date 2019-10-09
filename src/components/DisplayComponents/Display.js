import React from "react";
import Operators from "../ButtonComponents/OperatorButtons/OperatorButton";
import { operators } from "../../data";
import SpecialButton from '../ButtonComponents/SpecialButtons/SpecialButton';
import OperatorButton from "../ButtonComponents/OperatorButtons/OperatorButton";
import NumberButton from '../ButtonComponents/NumberButtons/NumberButton';
const Display = props => {
  return (
    <div className="display">{/* Display any props data here */}
      {props.specials}
    </div>
  )
};
export default Display;