import { Nav } from "react-bootstrap"
import LazyLoadingImage from "../LazyLoadingImg/LazyLoadingImg"
import './Footer.css'
const Footer = () =>{
    return(
        <div className="">
      <footer
              className="text-center text-lg-start text-white"
              style={{backgroundColor:" var(--main-Color)"}}
              >
        <div className="  py-4 px-2  pb-0">
            <div className="row ">
              <div className="col-md-2 col-lg-3 col-xl-2 mx-auto ">
                <div className="logoContainer ">

                <LazyLoadingImage src={'https://sketchtechnology.github.io/digitalAgency/sketch/assets/img/logo/sketch.png'} alt={'logo'} />
                </div>
              
              </div>
    
     
              <div className="col-md-2 col-lg-2 col-xl-4 mx-auto  ">
               
              </div>
    
             
    
              <div className="col-md-4 col-lg-3 col-xl-4 mx-auto  ">
               
              </div>
             
              <div className="col-md-2 col-4    ">
                <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
    
            <div className={`bg-white d-flex justify-content-center flex-wrap rounded-pill gap-2 p-1    align-items-center   `}>
          <i className="fa-brands text-dark fa-instagram"></i>
          <i className="fa-brands text-dark fa-facebook"></i>
          <i className="fa-brands text-dark fa-youtube"></i>
          <i className="fa-brands text-dark fa-linkedin-in"></i>
          <i className="fa-brands fa-tiktok text-dark"></i>
          <i className="fa-brands text-dark  fa-snapchat"></i>
          </div>
              </div>
            </div>
        </div>  
        <div
             className="text-center p-3"
             style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
             >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/"
             >MDBootstrap.com</a
            >
        </div>
      </footer>
    </div>)
}
  


export default Footer