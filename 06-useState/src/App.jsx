import React, { useState } from 'react'

const  App= () => {

  const [num, setnum] = useState(0)
  function increase(){
    setnum(num+1);
  }
  function decrease(){
    setnum(num-1);
  }
  return (
     <div className='king'>
      <div className="show">{num}</div>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
     </div>
  )
}

export default  App