import React, { useState } from "react";

//import any components needed
import OperatorButton from './OperatorButton'

//Import your array data to from the provided data file
import { operators } from '../../../data'

let Operators = (props) => {
  // STEP 2 - add the imported data to state
  // console.log('operators', operators)
  const [stateOperators, setOperator] = useState(operators);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operators.map((operator) => OperatorButton(operator))} />
    </div>
  );
};
export default Operators;