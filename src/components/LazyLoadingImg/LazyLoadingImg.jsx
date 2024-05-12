import LazyLoad from 'react-lazyload';

const LazyLoadingImage = ({ src, alt }) => {
  return (
    <LazyLoad height={200} offset={100} className='d-flex justify-content-center'>
      {/* The height and offset props control when the image should start loading */}
      <img src={src} alt={alt} height={'350px'} />
    </LazyLoad>
  );
};

export default LazyLoadingImage;