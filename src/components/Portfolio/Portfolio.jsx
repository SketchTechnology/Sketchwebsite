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
        image.style.transform = `translateX(-${scaledScrollPosition}px) `;
    
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{overflow:'hidden'}} className=' portfolioparent my-4' >

    <div className='portfolioImg position-relative  w-100 d-flex justify-content-center align-items-center'>
      <LazyLoadingImage src={img} alt={'portfolio'}    />
    </div>
    </div>
  );
};

export default Portfolio;
