import { useEffect } from "react";
import Titles from "../Titles/Titles";
import AboutCard from "./AboutCard";
import "./AboutCompany.css";
import "aos/dist/aos.css";
import Aos from "aos";
import img1 from "../../assets/img/about/ab1.png";
import img2 from "../../assets/img/about/ab2.png";
import LazyLoadingImage from "../LazyLoadingImg/LazyLoadingImg";
import MainBtn from "../Buttons/MainBtn";
import imgBg from "../../assets/img/new_home/about/about-2-img-1.png";
import iconOne from "../../assets/img/new_home/about/about-2-icon-1.png";
import iconTwo from "../../assets/img/new_home/about/about-2-icon-2.png";
import { useTranslation } from "react-i18next";
import SimpleCard from "../Cards/SimpleCard";
const AboutCompany = () => {
  const { t } = useTranslation();

  const content = [
    {
      icon: "fa-solid fa-users",
      title: `${t("CreativeTeam")}`,
    },
    {
      icon: "fa-solid fa-cogs",
      title: `${t("ManagementSystem")}`,
    },
    {
      icon: "fa-solid fa-headset",
      title: `${t("24/5_Support")}`,
    },
    {
      icon: "fa-solid fa-award",
      title: `${t("HighQuality")}`,
    },
  ];
  const cardContent = [
    {
      icon: iconOne,
      title: "Creative Ideas",
      content:
        "There are many variations of passag of Lorem Ipsum available, but the ma jority have suffered alteration",
    },
    {
      icon: iconTwo,
      title: "Creative Ideas",
      content:
        "There are many variations of passag of Lorem Ipsum available, but the ma jority have suffered alteration",
    },
  ];

  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <div className="container  aboutCompany  mx-auto">
      <div className="bi-section-title-4 my-2  headline" >
        <Titles
          secondtitle={t("AboutCompany")}
          maintitle={t("AboutcompanyTitle")}
        />
      </div>
      <div className="row">
        <div className="col-12 col-lg-5" data-aos="zoom-in">
          <div className="imgHolder  w-100">
            <img src={imgBg} alt="" />
          </div>
        </div>
        <div className="col-12 col-lg-7 p-md-5  p-2">
          <div className="aboutContent w-100  ">
            <h2 data-aos="fade-down-right">we provide best design solution in city</h2>
            <p data-aos="fade-down-left">
              in nec libero luctus, aliquet turpis at, vehicula nisi. cras eget
              mauris in nisl temp lobortis. nunc in nisi sapien. suspendisse
              finibus dolo et phar etra porta. sed quam elit, lacinia vitae mi
              quis
            </p>
            <div className="row gap-1  my-4 flex-md-nowrap flex-wrap justify-content-around ">
              {cardContent.map((item, ind) => (
                <div key={ind} className="col-12  col-md-6" data-aos="zoom-in-up" data-aos-delay="200" >
                <SimpleCard item={item}  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
{
  /* <div className="container">
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
      </div> */
}
