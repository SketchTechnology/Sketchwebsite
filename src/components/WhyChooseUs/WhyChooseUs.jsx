import LazyLoadingImage from '../LazyLoadingImg/LazyLoadingImg'
import personImg from '../../assets/img/sectorImage.png'
import './WhyChooseUs.css'
import Titles from "../Titles/Titles";
import AboutCard from "../AboutCompany/AboutCard";
const WhyChooseUs = () => {
  const content =[
    {
    title:'Responsive Design',
    icon:'fa-solid fa-pen-nib',
  },
    {
    title:'Productive Software    ',
    icon:'fa-brands fa-product-hunt',
  },
    {
    title:'Quality Product',
    icon:'fa-regular fa-star',
  },
    {
    title:'24/7 Online Support',
    icon:'fa-solid fa-headset',
  },
]
  return (
    <div>
      <div className="bi-title-waterprint headline my-5">
        <h2>Why Choose Us</h2>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center my-4">
      <div className="container">
        <div className="row flex-wrap p-0  align-items-center ">
       
          <div className="col-lg-5 col-12 ">
            <div className="">
              <div className=" headline " data-aos="zoom-in">
                <Titles
                  secondtitle={"WHY CHOOSE US"}
                  maintitle={"Experts Services to Change Business"}
                />
              </div>
              <div className="">
                <p data-aos="fade-up">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Pariatur ea temporibus ex culpa magni ut blanditiis aliquam
                  veritatis maxime necessitatibus autem veniam cupiditate
                  voluptate laudantium quos quo incidunt fuga sit? Explicabo
                  dolorum asperiores officiis.
                </p>
                 <div data-aos="fade-left">
                  <AboutCard content={content} />
                </div> 
                
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12  ">
            <div className="bi-why-choose-img1-area position-relative w-100 h-100">    
           
            <LazyLoadingImage
                  src={
                    personImg
                  }
                  alt={"personTwo"}
                /></div>     
           
                  
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WhyChooseUs