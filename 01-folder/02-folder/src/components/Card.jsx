import React from 'react'

const Card = (props) => {
  let age=props.age
  let name=props.name
  return (
     <div className='parent'>
      <div className="Card">
        <img src="https://plus.unsplash.com/premium_photo-1752159592012-4ba06ccec624?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{name},{age}</h1>
        <p>Lorem ipsum dimi libero dooremque earum recusandae.</p>
        <button>view Profile</button>
      </div>
    </div>
  )
}

export default Card