import Slider from 'react-infinite-logo-slider';
import './ImageSlider.css'; // Import CSS file for custom styling
import LazyLoadingImage from '../LazyLoadingImg/LazyLoadingImg';

const ImageSlider = () => {
    return (
        <div className="full-width-slider my-5"> {/* Wrapper div for full width */}
            <Slider
                width={'400px'}       
                duration={40}
                toRight={false}
                pauseOnHover={true}
                blurBorders={false}
                blurBoderColor={'#fff'}
            >
                <Slider.Slide>
                <LazyLoadingImage src={"https://sketchtechnology.github.io/digitalAgency/sketch/assets/img/service/ser1.png"} alt={"UiUx"} />
                </Slider.Slide>           
                <Slider.Slide>
                <LazyLoadingImage src={"https://sketchtechnology.github.io/digitalAgency/sketch/assets/img/service/ser2.png"} alt={"UiUx"} />
                </Slider.Slide>
                <Slider.Slide>
                <LazyLoadingImage src={"https://sketchtechnology.github.io/digitalAgency/sketch/assets/img/service/ser3.png"} alt={"UiUx"} />
                </Slider.Slide>
               
            </Slider>
        </div>
    );
};

export default ImageSlider;
