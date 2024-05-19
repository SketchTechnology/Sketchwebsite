import React from 'react'
import './HoverSlider.css'
import bgImg from '../../assets/img/new_home/offer/offer-img-1.png'
import iconOne from  '../../assets/img/new_home/offer/offer-color-icon-1.png'
import iconTwo from  '../../assets/img/new_home/offer/offer-color-icon-2.png'
import iconThree from  '../../assets/img/new_home/offer/offer-color-icon-3.png'
import iconFour from  '../../assets/img/new_home/offer/offer-color-icon-4.png'
const HoverSlider = () => {
    const HoverSliderData = [
        {
            title:'UI/UX Design From Professionalsx',
            content:'lorem5',
            icon:iconOne
        },
        {
            title:'Branding & Illustration',
            content:'lorem5',
            icon:iconTwo
        },
      
        {
            title:'Web Developments',
            content:'lorem5',
            icon:iconThree
        },
        {
            title:'Mobile Application',
            content:'lorem5',
            icon:iconFour
        },
    ]
  return (
    <div className='d-flex  flex-column flex-md-row gap-2 justify-content-center align-items-center my-4'>
        {
            HoverSliderData.map((item,ind)=><div key={ind} className="HoverItems position-relative d-flex flex-column align-items-center">
                <div className="iconCard   ">
                    <img src={item.icon} alt="icon" />
                </div>
            <span className='text-dark fs-3'>{item.title}</span>
            <div className="hoverData   " style={{backgroundImage:`url(${bgImg})`}}>
                <div className="container w-50 h-100 d-flex justify-content-center border align-items-start flex-column  mx-auto">

                <h2 className='text-white border '>{item.title}</h2>
                <h2 className='text-white'>{item.content}</h2>
                </div>
            </div>
          </div>)
        }
      
     
   
    </div>
  )
}

export default HoverSlider
