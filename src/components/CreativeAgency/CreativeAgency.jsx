import "./CreativeAgency.css";
import img1 from '../../assets/img/about/fn1.jpg'
import img2 from '../../assets/img/about/fn2.jpg'
import Aos from 'aos';

import { useEffect } from "react";
const CreativeAgency = () => {
	useEffect(() => {
		Aos.init({ once: true });
	  }, []);
  return (
    <div className=" CreativeAgencParent ">
      <div className="container mx-auto ">
        <div className="headings  d-flex flex-column align-items-center  ">
          <h6  data-aos="fade-right" data-aos-delay="700">WELCOME CREATIVE AGENCY</h6>
          <h2 data-aos="fade-right"  data-aos-delay="700" className="text-dark">Increase Your Web Traffic with Our Experts</h2>
        </div>
        <div className="row gap-3">
            <div className="col-12 p-0 col-md-4 position-relative badgeimg" data-aos="zoom-in" data-aos-delay="500">
                <img src={img1} alt="person" />
            </div>
            <div className="col p-0 col-md-7  position-relative badgeimg" data-aos="zoom-in" data-aos-delay="500">
                <img src={img2} alt="person" />
            </div>
        </div>
      </div>
      <div className="bi-fun-fact-counter container mx-auto">
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6">
						<div className="bi-counter-item position-relative headline pera-content d-flex align-items-center justify-content-between">
							<h3 className="counter"><span >10</span>x</h3>
							<p>Traffic
							Multiplied</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="bi-counter-item position-relative headline pera-content d-flex align-items-center justify-content-between">
							<h3 className="counter"><span >40</span>k</h3>
							<p>Website Building</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="bi-counter-item position-relative headline pera-content d-flex align-items-center justify-content-between">
							<h3 className="counter"><span >3</span>k+</h3>
							<p>Studios
							To Update</p>
						</div>
					</div>
				</div>
                <p className="text-center" data-aos="fade-right" data-aos-delay="500">No matter how big your company is, as you expand and reach new highs you’ll want an agency to
have your back. One with a process that has proven itself over and over again. That’s us. We’re
here to help you align, refine, design, and build</p>
<div className="d-flex justify-content-center my-2">

<button className="button2 text-dark">Get Services</button>
</div>

			</div>
    </div>
  );
};

export default CreativeAgency;
