import "./VissionAndMission.css";
import img1 from "../../assets/img/portfolio/pro2.jpg";
import img2 from "../../assets/img/portfolio/port3.jpg";
import { useEffect } from "react";
import Aos from 'aos';
const VissionAndMission = () => {
  useEffect(() => {
		Aos.init({ once: true });
	  }, []);
  return (
    <div className="CreativeAgencParent  ">
        <div className="d-flex align-items-center gap-2  justify-content-center my-3">
          <span className="line"></span>
        <h2 className="text-dark  text-center d-flex justify-content-center align-items-center ">Our Vissions <span className="symbol"> & </span> Missions</h2>
        <span className="line"></span>
        </div>

      <div className="container mx-auto MissionVision">
        <div className="row justify-content-between my-2">
          <div className="col-12 col-md-5 overflow-hidden p-0 rounded-4" data-aos="zoom-out" data-aos-delay="500">
            <img src={img1} alt="partners" width={"100%"} />
          </div>
          <div className="col-12 col-md-6 p-2 ">
            <div className="headings  d-flex flex-column align-items-center  ">
              <h6>IDEAS COME TO LIFE</h6>
              <h3 className="text-dark">Work Starts Immediately</h3>
            </div>
            <ul className="d-flex  justify-content-between">
                 <li className="text-dark">User Research</li>
                 <li className="text-dark">Story Board</li>
                 <li className="text-dark">Wire Framing</li>
                 <li className="text-dark">Usability Testing</li>
            </ul>
            <p className="text-center mt-2">Imagine your brand's narrative brought to life in pixels, engaging content that captivates your audience, and campaigns that resonate across the digital spectrum that's the </p>
          </div>
        </div>
        <div className="row   ">
          <div className="col-12 col-md-5  p-3">
            <h4 className="text-dark missions">
            MISSION
            </h4>
            <p>Our mission is to deliver exceptional results-driven solutions that maximize our client's online presence</p>
            <h4 className="text-dark vissions mt-2">
            Vission
            </h4>
                        <p>Our mission is to deliver exceptional results-driven solutions that maximize our client's online presence</p>

          </div>
          <div className="col-12 col-md-7 h-100 overflow-hidden  p-0 rounded-4">
            <img data-aos="zoom-in" data-aos-delay="500" src={img2} alt="partners" width={"100%"}  style={{objectFit:'contain'}} height={'200px !important'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VissionAndMission;
