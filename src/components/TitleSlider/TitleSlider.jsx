import Slider from 'react-infinite-logo-slider';
import './style.css'; // Import CSS file for custom styling

const TitleSlider = () => {
    return (
        <div className=" my-5 titleSlidermm"> {/* Wrapper div for full width */}
            <Slider
                width='130vw'
                 duration={40}
                 toRight={false}
                 pauseOnHover={false}
                 blurBorders={false}
                 blurBoderColor={'#fff'}
                 className='TitleSliderParent'
            >
                <Slider.Slide>
                    <h2 className='slidertitle '>Sketch Digital Marketing Agency</h2>
                </Slider.Slide>
                <Slider.Slide>
                    <h2 className='slidertitle'>Sketch Digital Marketing Agency</h2>
                </Slider.Slide>
              
            </Slider>
        </div>
    );
};

export default TitleSlider;