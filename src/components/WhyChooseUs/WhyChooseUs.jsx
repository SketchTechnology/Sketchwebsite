import LazyLoadingImage from "../LazyLoadingImg/LazyLoadingImg";
import personImg from "../../assets/img/about/whc1.png";
import sector1 from "../../assets/img/about/wh1.3.png";
import sector2 from "../../assets/img/about/wh1.4.png";
import sector3 from "../../assets/img/about/wh3.1.png";
import "./WhyChooseUs.css";
import Titles from "../Titles/Titles";
import AboutCard from "../AboutCompany/AboutCard";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const WhyChooseUs = () => {
  const {t}=useTranslation()
  const content = [
    {
      title:t('ExpressiveDesign'),
      icon: "fa-solid fa-pen-nib",
    },
    {
      title: t('ProductivitySoftware'),
      icon: "fa-brands fa-product-hunt",
    },
    {
      title: t('CreativeContent'),
      icon: "fa-regular fa-star",
    },
    {
      title: t('24/5_Support'),
      icon: "fa-solid fa-headset",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const floatingSectors = document.querySelectorAll('.floatingSector, .floatingSectorTwo, .floatingSectorThree');
      floatingSectors.forEach(sector => {
        const speed = parseFloat(sector.getAttribute('data-speed'));
        const yPos = -scrollPosition * speed;
        sector.style.transform = `translateY(${yPos}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="mt-5">
      <div className="bi-title-waterprint headline my-2">
        <h2>Why Choose Us</h2>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center my-4">
        <div className="container">
          <div className="row flex-wrap p-0  align-items-center ">
            <div className="col-lg-5 col-12 ">
              <div className="">
                <div className=" headline " data-aos="zoom-in">
                  <Titles
                    secondtitle={t('WhyChooseUs')}
                    maintitle={t("WhyChooseUsTitle")}
                  />
                </div>
                <div className="">
                  <p data-aos="fade-up">
                 {t("WhyChooseUsBaragraph")}
                  </p>
                  {/* <div data-aos="fade-left">
                    <AboutCard content={content} />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-12 position-relative  ">
              <div className="bi-why-choose-img1-area position-relative w-100 h-100">
                <LazyLoadingImage src={personImg} alt={"personTwo"} data-speed="0.5" />
                <div className="floatingSector">
                  <LazyLoadingImage src={sector1} alt={"sector1"} data-speed="0.7" />
                </div>
                <div className="floatingSectorTwo">
                  <LazyLoadingImage src={sector2} alt={"sector2"} data-speed="1" />
                </div>
                <div className="floatingSectorThree position-absolute">
                  <LazyLoadingImage src={sector3} alt={"sector3"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
