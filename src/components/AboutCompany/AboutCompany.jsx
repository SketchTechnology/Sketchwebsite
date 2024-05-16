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
import { useTranslation } from "react-i18next";
const AboutCompany = () => {
  const {t} = useTranslation()

  const content = [
    {
      icon:'fa-solid fa-users',
      title:`${t('CreativeTeam')}`
    },
    {
      icon:'fa-solid fa-cogs',
      title:`${t('ManagementSystem')}`
    },
    {
      icon:'fa-solid fa-headset',
      title:`${t('24/5_Support')}`
    },
    {
      icon:'fa-solid fa-award',
      title:`${t('HighQuality')}`
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
              <div className="bi-section-title-4  headline" data-aos="zoom-in">
                <Titles secondtitle={t('AboutCompany')} maintitle={t('AboutcompanyTitle')}  />
              </div>
              <div
                className="bi-about-text-area-4 bins-text"
               
              >
                <p data-aos="fade-up">
                  {t('AboutCompanyParagraph')}
                </p>
                <div data-aos="fade-left">
                <AboutCard content={content} />
                <div className="d-flex  justify-content-center flex-column gap-2 flex-md-row flex-wrap">
                <MainBtn content={t('ContactUsBtn')}/>
                <div className="d-flex flex-column callUs shadow px-2 rounded bg-white">
                  <span className="text-center" >
                    {t('AboutUsBtn')}

                  </span>
                  <span className="text-center">

+971 56 409 3626
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
