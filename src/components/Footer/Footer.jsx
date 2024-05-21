import LazyLoadingImage from "../LazyLoadingImg/LazyLoadingImg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerParent  ">
      <footer
        className="text-center text-lg-start text-white py-5"
        style={{ backgroundColor: " var(--main-Color)" }}
      >
        <div className="mainContent py-3   pb-0">
          <div className="row justify-content-between px-3 ">
            <div className="col-12 col-xl-2   p-0  footerData ">
            <div className="d-flex flex-column  justify-content-center justify-content-start align-items-start align-items-start gap-2     text-start   ">
              <div className="img ">

            <LazyLoadingImage
              src={
                "https://sketchtechnology.github.io/digitalAgency/sketch/assets/img/logo/sketch.png"
              }
              alt={"logo"}
              
              />
              </div>
            <p className="text-white text-start my-2 fs-6 w-100">
              Ready to skyrocket your online visibility? Its time to dominate
              the digital realm!
            </p>
          </div>
            </div>
         
            <div className="col-12 col-md-12 col-lg-5 col-xl-2">
            <div className="row py-3 justify-content-start flex-column   align-items-start ">
            <div className="col-12    text-center">
              <div className="d-flex flex-column   ">
                <h3 className=" text-start border-bottom mb-2">Us</h3>
                <div className="row align-items-start  gap-2  ">
                  <div className="col-12  col-md-6   flex-column  d-flex align-items-start gap-2 justify-content-start  p-0  text-start">                
                    <p className="text-white fs-6">Home</p>
                    <p className="text-white fs-6">About</p>
                    <p className="text-white fs-6">Service</p>                  
                  <p className="text-white mb-2 fs-6"> Contact Us</p>           
                  </div> 
                </div>
               
              </div>
            </div>
        </div>
                                              
          </div>
          <div className="col-12 col-md-12 col-lg-6 col-xl-5">
            <div className="row py-3 justify-content-start flex-column   align-items-start ">
            <div className="col-12    text-center">
              <div className="d-flex flex-column   ">
                <h3 className=" text-start border-bottom mb-2">Services</h3>
                <div className="row align-items-start  gap-2  ">
                  <div className="col-12  col-md-5   flex-column  d-flex align-items-start gap-2 justify-content-start  p-0  text-start">                
                    <p className="text-white">Social Media Marketing</p>
                    <p className="text-white">SEO/SEM</p>
                    <p className="text-white">Digital Marketing</p> 
                    <p className="text-white">Web Services</p>
                  </div>
                  <div className="col-12  col-md-5   flex-column  d-flex align-items-start gap-2 justify-content-start  p-0  text-start">
                  <p className="text-white ">Marketing Consulting</p>
                  <p className="text-white ">Video Prodcutin</p>
                  <p className="text-white ">Creative Designs</p>
                    <p className="text-white">Content Marketing</p>
                  
                    </div>
            
  
                </div>
               
              </div>
            </div>
        </div>
        
         
          
           
          </div>
            <div className="col-12 col-md-12 col-lg-5 col-xl-2">
            <div className="row py-3 justify-content-start flex-column   align-items-start ">
            <div className="col-12    text-center">
              <div className="d-flex flex-column   ">
                <h3 className=" text-start border-bottom mb-2">Contact</h3>
                <div className="row align-items-start  gap-2  ">
                  <div className="col-12  col-md-6   flex-column  d-flex align-items-start gap-2 justify-content-start  p-0  text-start">                
                    <p className="text-white fs-6">Home</p>
                    <p className="text-white fs-6">About</p>
                    <p className="text-white fs-6">Service</p> 
                 
                  <p className="text-white fs-6"> Contact Us</p>           
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
        className="text-center p-2  w-100  bg-dark text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
      </div>
    </div>
  );
};

export default Footer;
