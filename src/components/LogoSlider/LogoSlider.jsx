import Slider from 'react-infinite-logo-slider';
import LazyLoadingImage from '../LazyLoadingImg/LazyLoadingImg';
import img1 from '../../assets/img/Clients/client-1.png'
import img2 from '../../assets/img/Clients/client-3.png'
import img3 from '../../assets/img/Clients/client-4.png'
import img4 from '../../assets/img/Clients/client-7.png'
import img5 from '../../assets/img/Clients/client-8.png'
import img6 from '../../assets/img/Clients/client-9.png'
import img7 from '../../assets/img/Clients/client-10.png'
const LogoSlider = () => {
    return (
        <div className="full-width-slider bg-white position-relative logoSlider ">
            <div className="OurClientsLogo d-flex justify-content-center align-items-center">
                <h2 className='d-flex justify-content-center align-items-center bg-dark shadow text-white  '>Our Clients</h2>
                </div> {/* Wrapper div for full width */}
            <Slider
                width={'400px'}       
                duration={40}
                toRight={false}
                pauseOnHover={true}
                blurBorders={false}
                blurBoderColor={'#fff'}
            >
                <Slider.Slide>
                <LazyLoadingImage src={img1} alt={"iLawFair"}  height={'150px'}   />
                </Slider.Slide>           
                <Slider.Slide>
                <LazyLoadingImage src={img2} alt={"Babak"}     height={'150px'}     />
                </Slider.Slide>           
                <Slider.Slide>
                <LazyLoadingImage src={img3} alt={"IlawServ"}  height={'150px'}     />
                </Slider.Slide>           
                <Slider.Slide>
                <LazyLoadingImage src={img4} alt={"Bonbon"}   height={'150px'}    />
                </Slider.Slide>           
                <Slider.Slide>
                <LazyLoadingImage src={img5} alt={"اقرب"}     height={'150px'}     />
                </Slider.Slide>           
                <Slider.Slide>
                <LazyLoadingImage src={img6} alt={"enaya"}    height={'150px'}     />
                </Slider.Slide>           
                <Slider.Slide>
                <LazyLoadingImage src={img7} alt={"lulu"}    height={'150px'}    />
                </Slider.Slide>           
             
               
            </Slider>
        </div>
    );
};

export default LogoSlider;
