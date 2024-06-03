import Slider from "react-infinite-logo-slider";
import "./ImageSlider.css"; // Import CSS file for custom styling
import LazyLoadingImage from "../LazyLoadingImg/LazyLoadingImg";
import img1 from '../../assets/img/service/ser1.png'
import img2 from '../../assets/img/service/ser2.png'
import img3 from '../../assets/img/service/ser3.png'
import arrow from '../../assets/img/service/9174013.png'
const ImageSlider = () => {
  const ServicesSlider = [
    {
      img:img1,
      content:'UI&Ux'
    },
    {
      img:img2,
      content:'UI&Ux'
    },
    {
      img:img3,
      content:'UI&Ux'
    }
    ,
    {
      img:img2   ,
      content:'UI&Ux'
    }
    ,
    {
      img:img1  ,
      content:'UI&Ux'
    }
  ]
  return (
    <div className="full-width-slider my-5">
      {" "}
      {/* Wrapper div for full width */}
      <Slider
        width={"600px"}
        duration={80}
        toRight={false}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={"#fff"}
      >
        {
          ServicesSlider.map((item,ind)=>   <Slider.Slide key={ind}>
    <div className="sliderParent position-relative">

          <LazyLoadingImage
            src={
              item.img
            }
            alt={"UiUx"}
            height={"600px"}
            />
            <div className="sliderContent px-3 align-items-center w-100 d-flex justify-content-between">
          <span className="fs-2" >
            {item.content}
          </span>
          <div className="arrowImg">

      <img src={arrow} alt="" />
          </div>
            </div>
            </div>
      </Slider.Slide>  )
        }
      

      </Slider>
    </div>
  );
};

export default ImageSlider;
