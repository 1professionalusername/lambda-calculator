import React from "react";
import { operators } from '../../../data'


const OperatorButton = (operators) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{operators.char}</button>
    </>
  );
};
export default OperatorButton;