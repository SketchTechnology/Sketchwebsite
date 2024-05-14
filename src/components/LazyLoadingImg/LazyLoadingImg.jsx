import LazyLoad from 'react-lazyload';

const LazyLoadingImage = ({ src, alt ,height}) => {
  return (
    <LazyLoad height={200} offset={100} className='d-flex justify-content-center'>
      {/* The height and offset props control when the image should start loading */}
      <img src={src} alt={alt} height={height} />
    </LazyLoad>
  );
};

export default LazyLoadingImage;