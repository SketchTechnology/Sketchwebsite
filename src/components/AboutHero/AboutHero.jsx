import React from 'react'
import './AboutHero.css'
import Groupbtns from '../Buttons/Groupbtns'
const BtnsContent =[
    {
        content:'Home',
        nav:'/',
        active:false
    },
    {
        content:'About',
        nav:'',
        active:true
    }
]
const AboutHero = () => {
  return (
    <div className='border vw-100 flex-column d-flex justify-content-center align-items-center HeroParent' >
      <p className='text-white  display-1'>About Us</p>
      <Groupbtns content={BtnsContent}/>
    </div>
  )
}

export default AboutHero
