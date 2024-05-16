import LazyLoadingImage from "../LazyLoadingImg/LazyLoadingImg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="  footerParent ">
      <footer
        className="text-center text-lg-start text-white py-2"
        style={{ backgroundColor: " var(--main-Color)" }}
      >
        <div className="mainContent py-3   pb-0">
          <div className="row  ">
            <div className="col-12  col-md-4  footerData ">
            <div className="d-flex flex-column justify-content-center justify-content-md-start align-items-center align-items-start-center gap-2    text-start text-md-center   ">
            <LazyLoadingImage
              src={
                "https://sketchtechnology.github.io/digitalAgency/sketch/assets/img/logo/sketch.png"
              }
              alt={"logo"}
            />
            <p className="text-white w-75">
              Ready to skyrocket your online visibility? It's time to dominate
              the digital realm!
            </p>
          </div>
            </div>
            <div className="col-12 col-md-7 col-lg-6 col-xl-5">
            <div className="row py-3 justify-content-start flex-column   align-items-start ">
            <div className="col-12    text-center">
              <div className="d-flex flex-column   ">
                <h3 className=" text-start border-bottom mb-2">Services</h3>
                <div className="row align-items-start  gap-2  ">
                  <div className="col-12  col-md-6   flex-column  d-flex align-items-start gap-2 justify-content-start  p-0  text-start">                
                    <p className="text-white">Social Media Marketing</p>
                    <p className="text-white">SEO/SEM</p>
                    <p className="text-white">Digital Marketing</p> 
                    <p className="text-white">Web Services</p>
                  <p className="text-white">Video Prodcutin</p>
                  </div>
                  <div className="col-12  col-md-5 text-start d-md-block d-flex flex-md-row flex-column align-items-start gap-2 justify-content-start  p-0  text-start">
                  <p className="text-white mb-2">Marketing Consulting</p>
                  <p className="text-white mb-2">Creative Designs</p>
                    <p className="text-white">Content Marketing</p>
                  
                    </div>
            
  
                </div>
               
              </div>
            </div>
        </div>
        
         
          
           
          </div>
          </div>
       
        </div>
        <div className="  align-self-center d-flex justify-content-center    ">
              <div
                className={` d-flex justify-content-center flex-wrap py-3 w-50    align-items-center  gap-4 gap-md- border-bottom `}
              >
                <i className="fa-brands fs-5 text-white fa-instagram"></i>
                <i className="fa-brands fs-5 text-white fa-facebook"></i>
                <i className="fa-brands fs-5 text-white fa-youtube"></i>
                <i className="fa-brands fs-5 text-white fa-linkedin-in"></i>
                <i className="fa-brands fs-5 fa-tiktok text-white"></i>
                <i className="fa-brands fs-5 text-white  fa-snapchat"></i>
              </div>
            </div>
      </footer>
      <div
        className="text-center p-3  w-100  bg-dark text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
      </div>
    </div>
  );
};

export default Footer;
