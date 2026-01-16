import React from 'react'
import { ArrowRight } from 'lucide-react';
const RightCardContent = (props) => {
 
  return (
     <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
            <h2 className='bg-white h-10 w-10 rounded-full text-3xl text-center'>{props.num}</h2>
            <div>
                <p className=' text-white text-lg leading-relaxed mb-15 font-bold'   >{props.intro}</p>
                <div className='text-white flex justify-between'>
                    <button style={{backgroundColor:props.color}} className='text-lg  px-8 py-2 font-medium rounded-full'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className='text-1xl  px-3 py-2 font-medium rounded-full'> <ArrowRight /></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent