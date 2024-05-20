import React, { useEffect, useState } from 'react';
import './HoverSlider.css';
import iconOne from '../../assets/img/new_home/offer/offer-color-icon-1.png';
import iconTwo from '../../assets/img/new_home/offer/offer-color-icon-2.png';
import iconThree from '../../assets/img/new_home/offer/offer-color-icon-3.png';
import iconFour from '../../assets/img/new_home/offer/offer-color-icon-4.png';
import iconbg from '../../assets/img/new_home/offer/offer-shape-2.png';
import arrowRight from '../../assets/img/new_home/icon/check-style.png'
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const HoverSlider = () => {
    const HoverSliderData = [
        {
            title: 'UI/UX Design ',
            content: 'lorem5',
            icon: iconOne,
        },
        {
            title: 'Branding ',
            content: 'lorem5',
            icon: iconTwo,
        },
        {
            title: 'Web Developments',
            content: 'lorem5',
            icon: iconThree,
        },
        {
            title: 'Mobile Application',
            content: 'lorem5',
            icon: iconFour,
        },
        {
            title: 'Mobile Application',
            content: 'lorem5',
            icon: iconFour,
        },
       
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };
   
    return (
        <div className='d-flex flex-column flex-md-row flex-wrap   mx-auto container gap-2 justify-content-center align-items-center my-4'>
            {HoverSliderData.map((item, ind) => (
                <div
              
                key={ind}
                    className={`HoverItems  position-relative d-flex  flex-column align-items-center ${activeIndex === ind ? 'opened' : ''}`}
                    onMouseEnter={() => handleMouseEnter(ind)}
                >
                    <div className={`iconCard mt-2  ${activeIndex === ind ?'brightnees100 left20 ' : 'brightneesZero'}`}>
                        <img src={item.icon} alt="icon" />
                    </div>
                    <div className={`iconbg  ${activeIndex === ind ?'brightnees100 left20 ' : 'brightneesZero'}`}>

                        <img src={iconbg} alt="iconbg" />
                    </div>
                    <span className={`text-dark fs-3 justify-content-center ${activeIndex == ind ?'d-none':''}`} style={{width:'350px'}} >{item.title}</span>
                    <div className={`hoverData  p-4 ${activeIndex === ind ? 'showData ' : ''}`}>
                        <div className={`container-fluid  mt-3 w-100 h-100 d-flex  justify-content-end  align-items-start flex-column mx-auto ${activeIndex==ind?"showData":"hoverTitle"} `}>
                            <h2 className={`text-white  w-100 text-start ${activeIndex == ind?'showTitle':'hoverTitle'} `}>{item.title}</h2>
                            <ul className='w-100'>
                                <div className="d-flex align-items-center gap-2">
                                    <img src={arrowRight} alt="" />
                                <li className='hoverlist' theLittleDetails="The best UI" >UI&UX</li>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <img src={arrowRight} alt="" />
                                <li className='hoverlist' theLittleDetails="Make Your own Web">Web Development</li>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <img src={arrowRight} alt="" />
                                <li className='hoverlist' theLittleDetails="The best UI">UI&UX</li>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <img src={arrowRight} alt="" />
                                <li className='hoverlist' theLittleDetails="Make Your own Web">Web Development</li>
                                </div>
                              
                            </ul>
                            <div className="btnContainer my-4 w-100 d-flex justify-content-center justify-content-md-end">
                            <button className="button2 text-dark">View More</button>

                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HoverSlider;
