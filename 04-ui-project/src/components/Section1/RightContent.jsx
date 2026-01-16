import React from 'react'
import RightCard from './RightCard.jsx'
const RightContent = (props) => {
  
  return (
    <div style={{overflow:"auto",scrollbarWidth:"none"}} className='h-full flex overflow-x-auto flex-nowrap gap-10 w-3/4 p-4  ' >
      {props.user.map(function(elem){
        return <RightCard img={elem.img} tag={elem.tag} intro={elem.intro} num={elem.num} color={elem.color}/>
      })}
    </div>
  )
}

export default RightContent