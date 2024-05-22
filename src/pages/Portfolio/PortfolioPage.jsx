import React from 'react'
import './PortfolioPage.css'
import HeadSec from '../../components/HeadSec/HeadSec'
import bg1 from '../../assets/img/project/pro1.png'
import bg2 from '../../assets/img/project/pro2.png'
import bg3 from '../../assets/img/project/pro3.png'
import bg4 from '../../assets/img/project/pro4.png'
import bg5 from '../../assets/img/project/pro5.png'
import bg6 from '../../assets/img/project/pro6.png'
import bg7 from '../../assets/img/project/pro7.png'
import bg8 from '../../assets/img/project/pro8.png'
export const PortfolioPage = () => {
  const BtnsContent =[
    {
        content:'Home',
        nav:'/',
        active:false
    },
    {
        content:'Portfolio',
        nav:'',
        active:true
    }
]
const Title = 'Portfolio'
const cardsData = [
  {
    img:bg1,
  },
  {
    img:bg2,
  },
  {
    img:bg3,
  },
  {
    img:bg4,
  },
  {
    img:bg5,
  },
  {
    img:bg6,
  },
  {
    img:bg7,
  },
  {
    img:bg8,
  },
]

  return (
    <div className=''>

<HeadSec BtnsContent={BtnsContent} Title={Title}/>
<div className="HoverCardParent container mx-auto py-5 my-5 position-relative">
  <div className="d-flex gap-2 align-items-center  justify-content-center portfolioTitle">

  <span></span>
  <h5 className='text-center' >Our Projects</h5>
  <span></span>
  </div>
<h2 className=' text-center text-dark'>
Explore Our Best 
Completed Projects
</h2>
        <div  className="d-flex justify-content-center gap-5 flex-wrap">
        {
          cardsData.map((item,ind)=>       

          
          <div key={ind} className=" my-5 container noselect imghoverParent">
            <div className="canvas">
              <div className="tracker tr-1"></div>
              <div className="tracker tr-2"></div>
              <div className="tracker tr-3"></div>
              <div className="tracker tr-4"></div>
              <div className="tracker tr-5"></div>
              <div className="tracker tr-6"></div>
              <div className="tracker tr-7"></div>
              <div className="tracker tr-8"></div>
              <div className="tracker tr-9"></div>
              <div className="tracker tr-10"></div>
              <div className="tracker tr-11"></div>
              <div className="tracker tr-12"></div>
              <div className="tracker tr-13"></div>
              <div className="tracker tr-14"></div>
              <div className="tracker tr-15"></div>
              <div className="tracker tr-16"></div>
              <div className="tracker tr-17"></div>
              <div className="tracker tr-18"></div>
              <div className="tracker tr-19"></div>
              <div className="tracker tr-20"></div>
              <div className="tracker tr-21"></div>
              <div className="tracker tr-22"></div>
              <div className="tracker tr-23"></div>
              <div className="tracker tr-24"></div>
              <div className="tracker tr-25"></div>
              <div id="card" style={{backgroundImage:`url(${item.img})`}}>
                <div className="subtitle border text-white shadow  p-2">
                Banking Landing Page Design    
                <div className="d-flex gap-2 align-item-center justify-content-between">
                  <div className="Cardbadge shadow ">
                    uiux
                  </div>
                  <div className="Cardbadge shadow">
                    uiux
                  </div>
                  <div className="Cardbadge shadow">
                    uiux
                  </div>
                  <div className="Cardbadge shadow">
                    uiux
                  </div>
                </div>
                  </div>
                
              </div>
            </div>
          </div>
          
          
          
          
          
        )
      }
      </div>
 
</div>
    </div>
  )
}
