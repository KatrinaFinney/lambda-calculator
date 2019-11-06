
import React, {useState} from "react";
import {numbers} from "../../../data";
import NumberButton from "./NumberButton"
//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
const [numberButton, setNumberButton] = useState(numbers)
  return (
    <div className= "numbers" >
      { numberButton.map((button, index) => (
         <NumberButton key = {index} numbers = {button}/>
      ))}
     
    </div>
  );
};

export default Numbers
