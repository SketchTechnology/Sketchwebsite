import React from 'react'
import './AboutHero.css'
import Groupbtns from '../Buttons/Groupbtns'

const HeadSec = ({BtnsContent,Title}) => {
  return (
    <div className='border vw-100 flex-column d-flex justify-content-center align-items-center HeroParent' >
      <p className='text-white  display-1'>{Title}</p>
      <Groupbtns content={BtnsContent}/>
    </div>
  )
}

export default HeadSec
