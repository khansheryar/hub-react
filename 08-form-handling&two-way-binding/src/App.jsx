import React, { useState } from 'react'

const App = () => {
  const [curr, setfirst] = useState("");
  function formHandler(e){
      e.preventDefault()
      console.log("form submited by",curr);
      setfirst('')
    }

  return (
    <form  onSubmit={(e)=>{
      formHandler(e)
    }} >
      <input type="text"
       placeholder='enter your name ?' 
       value={curr}

       onChange={(e)=>{
        setfirst(e.target.value)
       }}
       />
      <button>Submit</button>
    </form>
  )
}

export default App