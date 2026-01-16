import React from 'react'
import HeroText from './HeroText.jsx'
import Arrow from './Arrow.jsx'


const LeftContent = () => {
  return (
    <div className='h-full w-1/3 justify-between' style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between"
    }}>
     <HeroText/>
     <Arrow/>
      
    </div>
  )
}

export default LeftContent