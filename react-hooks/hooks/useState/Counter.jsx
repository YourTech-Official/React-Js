import React, { useState } from "react";

const Counter = () => {
//   let counter = 0; //normal variable are inmutable in react, thats why we use hooks

//   const increase = () => {
//     counter++;
//     console.log(counter);
// };

// const decrease = () => {
//     counter--;
//     console.log(counter);
//   };

 const [counter, setCounter] = useState(0);
//  const [counter, setCounter] = useState("you Wanna click me !"); try this

//  setCounter , not fixed name or rule we can modify as our choice
// useState() , can take number, string, array etc. 

 const increase = () => {
    // setCounter("Hey you Clicked me! ");  try this
    setCounter(counter + 1);
 }
 const decrease = () => {
    // setCounter("you decrease me "); try this
    setCounter(counter - 1);
 }
  

  return (
    <div>
      <h1>{counter}</h1>

      <button onClick={increase}>Increase 1</button>
      <button onClick={decrease}>Decrease 1</button>
    </div>
  );
};

export default Counter;
