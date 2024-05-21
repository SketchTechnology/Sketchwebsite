import React from 'react'
import arrowRight from "../../assets/img/new_home/icon/check-style.png";

const WeDev = () => {
  return (
    <div className='w-100  h-100  p-4 '>
      <h2 className='text-dark  text-center'>WebDev</h2>
      <p className='text-center my-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ut adipisci maiores harum. Reiciendis aut voluptatem sint similique nam esse! Magnam iure voluptatu</p>
      <ul className="w-100 row gap-3 flex-wrap">
          <div className="d-flex align-items-center col-4 gap-2">
            <img src={arrowRight} alt="Arrow" />
            <li className="flex-fill text-dark">UI&UX</li>
          </div>
          <div className="d-flex align-items-center gap-2 ">
            <img src={arrowRight} alt="Arrow" />
            <li className="flex-fill text-dark">Web Development</li>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src={arrowRight} alt="Arrow" />
            <li className="flex-fill text-dark">Web Development</li>
          </div>
         
          
        
        </ul>
    </div>
  )
}

export default WeDev
