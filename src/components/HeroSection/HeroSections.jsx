import  { useEffect } from 'react';
import './HeroSection.css';
import Aos from 'aos';
import img1 from '../../assets/img/slider/bn1.png';
import img2 from '../../assets/img/slider/bn2.png';
import img3 from '../../assets/img/slider/bn3.png';
import img4 from '../../assets/img/slider/bn4.png';
import img5 from '../../assets/img/slider/bn5.png';
import { useTranslation } from 'react-i18next';

const HeroSections = () => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  const {t} = useTranslation()

  const handleMouseMove = (e) => {
    const imgs = document.querySelectorAll('.img');
    imgs.forEach((img) => {
      const offsetX = e.clientX - img.getBoundingClientRect().left;
      const offsetY = e.clientY - img.getBoundingClientRect().top;
      const transformX = offsetX / img.offsetWidth - 0.5;
      const transformY = offsetY / img.offsetHeight - 0.5;
      img.style.transform = `translate(${transformX * 30}px, ${transformY * 30}px)`;
    });
  };

  const handleMouseLeave = () => {
    const imgs = document.querySelectorAll('.img');
    imgs.forEach((img) => {
      img.style.transform = 'translate(0, 0)';
    });
  };

  return (
    <div className="HeroSectionParent" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="container container-md-fluid mx-auto d-flex flex-column align-items-center position-relative text-center">
        <div className="imgOne img" data-aos="zoom-in" data-aos-delay="200" >
          <img src={img1} alt="" />
        </div>
        <div className="imgTwo img" data-aos="zoom-out" data-aos-delay="400" >
          <img src={img2} alt="" />
        </div>
        <div className="imgThree img" data-aos="zoom-in" data-aos-delay="600" >
          <img src={img3} alt="" />
        </div>
        <div className="imgFour img" data-aos="zoom-in" data-aos-delay="800" > 
          <img src={img4} alt="" />
        </div>
        <div className="imgFive img" data-aos="zoom-in" data-aos-delay="900" >
          <img src={img5} alt="" />
        </div>
        <div className="d-flex justify-content-center flex-wrap flex-column flex-md-row align-items-center">
          <h1 className="flex-column d-flex justify-content-center align-items-center container text-center">
            <p data-aos="fade-left" data-aos-delay="1000" className="fw-lighter text-center text-md-start">
              We Are
            </p>
            <span data-aos="fade-right" data-aos-delay="1200" className="text-center text-md-start">
              Creative
            </span>
            <strong data-aos="fade-left" data-aos-delay="1400" className="d-flex justify-content-md-start justify-content-center">
              Agency
            </strong>
          </h1>
        </div>
        <p data-aos="fade-up" data-aos-delay="1600">
        {t('HomeContent')}
        </p>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#005E64', width: '100%', height: 105, transform: 'rotate(180deg)' }}
        >
          <path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" opacity=".25" />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#005E64', width: '100%', height: 105 }}
        >
          <path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" opacity=".25" />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSections;
