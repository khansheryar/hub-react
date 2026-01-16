import React from 'react'
import LeftContent from './LeftContent.jsx'
import RightContent from './RightContent.jsx'
const Page1Content = (props) => {
  return (
    <div className='py-10 px-18 h-[86vh] flex gap-10 items-center'>
        <LeftContent/>
        <RightContent  user={props.user}/>

    </div>
  )
}

export default Page1Content