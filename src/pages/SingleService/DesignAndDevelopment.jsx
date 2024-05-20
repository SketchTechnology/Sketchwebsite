import React from 'react';
import expertImg from "../../assets/img/new_home/service/service-2-img-3.png";
import expertImg2 from "../../assets/img/new_home/service/service-2-img-2.png";
import arrowRight from "../../assets/img/new_home/icon/check-style.png";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const DesignAndDevelopment = () => {
  return (
    <div className="w-100 h-100 row flex-wrap ">
      <div className="col-6 p-0">
        <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} showStatus={false} className='h-100'>
          <div className='h-100'>
            <img src={expertImg} alt="Expert 1" style={{ width: '100%', height: '100%', objectFit: 'cover !important' }} />
          </div>
          <div className='h-100'>
            <img src={expertImg2} alt="Expert 2" style={{ width: '100%', height: '100%', objectFit: 'cover !important' }} />
          </div>
        </Carousel>
      </div>
      <div className="col-6 rounded d-flex align-items-center flex-column  justify-content-center">
        <h2 className='text-dark'>Ui&UX</h2>
        <ul className="w-100 d-flex flex-column gap-3">
          <div className="d-flex align-items-center gap-2">
            <img src={arrowRight} alt="Arrow" />
            <li className="flex-fill text-dark">UI&UX</li>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src={arrowRight} alt="Arrow" />
            <li className="flex-fill text-dark">Web Development</li>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src={arrowRight} alt="Arrow" />
            <li className="flex-fill text-dark">Mobile Development</li>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src={arrowRight} alt="Arrow" />
            <li className="flex-fill text-dark">Branding</li>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src={arrowRight} alt="Arrow" />
            <li className="flex-fill text-dark">Marketing</li>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src={arrowRight} alt="Arrow" />
            <li className="flex-fill text-dark">SEO Optimization</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DesignAndDevelopment;
