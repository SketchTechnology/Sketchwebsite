import  { useEffect } from 'react';
import './Portfolio.css';
import img from '../../assets/img/about/scrolImgnew.png';
import LazyLoadingImage from '../LazyLoadingImg/LazyLoadingImg';

const Portfolio = () => {
  useEffect(() => {
    const handleScroll = () => {
      const image = document.querySelector('.portfolioImg');
     const scrollPosition = window.scrollY;
        const scaledScrollPosition = scrollPosition * 0.1;
        image.style.transform = `translateX(-${scaledScrollPosition}px) scale(1.9)`;
    
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{overflow:'hidden'}} className='pt-5' >

    <div className='portfolioImg position-relative'>
      <LazyLoadingImage src={img} alt={'portfolio'}  height={'100%'}  />
    </div>
    </div>
  );
};

export default Portfolio;
