import Slider from "react-infinite-logo-slider";
import "./ImageSlider.css"; // Import CSS file for custom styling
import LazyLoadingImage from "../LazyLoadingImg/LazyLoadingImg";
import img1 from '../../assets/img/Cards/card-1.webp'
import img2 from '../../assets/img/Cards/card-2.webp'
import img3 from '../../assets/img/Cards/card-3.webp'
import img4 from '../../assets/img/Cards/card-4.webp'
import img5 from '../../assets/img/Cards/card-5-2.webp'
import img6 from '../../assets/img/Cards/card-7-1.webp'
const ImageSlider = () => {
  return (
    <div className="full-width-slider my-5">
      {" "}
      {/* Wrapper div for full width */}
      <Slider
        width={"500px"}
        duration={40}
        toRight={false}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={"#fff"}
      >
        <Slider.Slide>
    
            <LazyLoadingImage
              src={
                img1
              }
              alt={"UiUx"}
              height={"400px"}
            />
        </Slider.Slide>
        <Slider.Slide>
     =
          <LazyLoadingImage
            src={
              img2
            }
            alt={"Web Development"}
            height={"400px"}
          />
       
        </Slider.Slide>
        <Slider.Slide> 
  
          <LazyLoadingImage
            src={
              img3
            }
            alt={"Mobile Apps"}
            height={"400px"}
          />
        </Slider.Slide>
        <Slider.Slide>
       
          <LazyLoadingImage
            src={
              img4
            }
            alt={"UiUx"}
            height={"400px"}
          />
        </Slider.Slide>
        <Slider.Slide>
      
          <LazyLoadingImage
            src={
              img5}
            alt={"Web Development"}
            height={"400px"}
          />
        </Slider.Slide>
        <Slider.Slide>
     
          <LazyLoadingImage
            src={
              img6
            }
            alt={"Mobile Apps"}
            height={"400px"}
          />
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default ImageSlider;
