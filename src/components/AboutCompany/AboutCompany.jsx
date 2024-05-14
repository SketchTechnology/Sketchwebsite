import { useEffect } from "react";
import Titles from "../Titles/Titles";
import AboutCard from "./AboutCard";
import "./AboutCompany.css";
import "aos/dist/aos.css";
import Aos from "aos";
import img1 from '../../assets/img/about/ab1.png'
import img2 from '../../assets/img/about/ab2.png'
import LazyLoadingImage from "../LazyLoadingImg/LazyLoadingImg";
import MainBtn from "../Buttons/MainBtn";
const AboutCompany = () => {
  const content = [
    {
      icon:'fa-solid fa-users',
      title:"Dedicated Team"
    },
    {
      icon:'fa-solid fa-cogs',
      title:"Clean Setup"
    },
    {
      icon:'fa-solid fa-headset',
      title:"24/7  Support"
    },
    {
      icon:'fa-solid fa-award',
      title:"Winning Award"
    },
  ]
  useEffect(() => {
    Aos.init({
      delay:1000,
      once:true
    });
  }, []);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center my-4">
      <div className="container">
        <div className="row flex-wrap p-0  ">
          <div className="col-lg-7 ">
            <div className="bi-about-img-wrapper4 position-relative w-100 ">
              <span className="about-circle-shape position-absolute  wow zoomIn" data-aos="zoom-in">
                <img
                  src="https://sketchtechnology.github.io/digitalAgency/sketch/assets/img/about/circle1.png"
                  alt=""
                />
              </span>
              <div className="about-img1 wow "  data-aos="fade-up"
                >
                <LazyLoadingImage src={img1} alt={'userOne'} height={'450px'}/>
                
              </div>
              <div className="about-img2 mt-3  wow "  data-aos="fade-right"
                >
                        <LazyLoadingImage src={img2} height={'350px'} alt={'person'}/>

              
              </div>
            </div>
          </div>
          <div className="col-lg-5 ">
            <div className="bi-about-text-4 position-relative">
              <div className="bi-section-title-4 headline" data-aos="zoom-in">
                <Titles secondtitle={'ABOUT COMPANY'} maintitle={'We Provide Best Design Solution in City'}  />
              </div>
              <div
                className="bi-about-text-area-4 bins-text"
               
              >
                <p data-aos="fade-up">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Pariatur ea temporibus ex culpa magni ut blanditiis aliquam
                  veritatis maxime necessitatibus autem veniam cupiditate
                  voluptate laudantium quos quo incidunt fuga sit? Explicabo
                  dolorum asperiores officiis.
                </p>
                <div data-aos="fade-left">
                <AboutCard content={content} />
                <div className="d-flex  justify-content-between flex-column gap-2 flex-md-row">
                <MainBtn content={'Our Company'}/>
                <div className="d-flex flex-column callUs shadow px-2 rounded bg-white">
                  <span >
                    
Call Us Anytime
                  </span>
                  <span>
                  0215 6856 9875

                  </span>
                </div>
                </div>
           
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
