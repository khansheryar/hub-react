import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(3)
  function click(){
   setnum(prev=>(prev+1));
   setnum(prev=>(prev+1))

  }
  return (
    <div>
      <div><h1>{num}</h1></div>
      <button onClick={click}>click me</button>
    </div>
  )
}

export default App