import React, { useEffect, useState } from 'react'

const  FetchData = () => {
 const [counter, setCounter]  = useState(0);

 useEffect(() =>{ //run only when browser is render
    document.title = counter;//replace title with counter
    console.log("useEffect is running");

  
 }, [counter])//check with counter and without counter
  return (
    <div>
      <h1>counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
      <button onClick={() => setCounter(counter - 1)}>decrease</button>
      
    </div>
  )
}

export default FetchData