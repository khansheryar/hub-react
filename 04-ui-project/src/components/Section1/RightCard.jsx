import React from 'react'
import { ArrowRight } from 'lucide-react';
import RightCardContent from './RightCardContent.jsx';

const RightCard = (props) => {
  
  return (
    <div className='h-full shrink-0 overflow-hidden w-90 relative rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RightCardContent tag={props.tag} intro={props.intro} num={props.num} color={props.color} />
    </div>
  )
}

export default RightCard