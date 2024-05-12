import Slider from 'react-infinite-logo-slider';
import './style.css'; // Import CSS file for custom styling

const TitleSlider = () => {
    return (
        <div className="full-width-slider my-5"> {/* Wrapper div for full width */}
            <Slider
                 width="150vw"
                 duration={40}
                 toRight={false}
                 pauseOnHover={false}
                 blurBorders={false}
                 blurBoderColor={'#fff'}
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