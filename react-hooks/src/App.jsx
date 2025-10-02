import React from 'react'
// import Counter from '../hooks/useState/Counter'
import FetchData from '../hooks/useEffect/FetchData'
import Counter from '../hooks/useEffect/Counter'

const App = () => {
  return (
    <div>
      {/* useEffect */}
      <Counter />
      <FetchData />
     

      {/* useState */}
     {/* <Counter /> */}
    </div>
  )
}

export default App
