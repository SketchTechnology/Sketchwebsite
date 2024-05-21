import './Quality.css'
import img1 from '../../assets/img/service/ser1.jpg'
import img2 from '../../assets/img/service/ser2.jpg'
import img3 from '../../assets/img/service/ser3.jpg'
import img4 from '../../assets/img/service/ser4.jpg'
import img5 from '../../assets/img/service/ser5.jpg'
import img6 from '../../assets/img/service/ser6.jpg'
import { useEffect, useState } from 'react'
import Aos from 'aos';
// import img7 from '../../assets/img/service/ser7.jpg'
const Quality = () => {
    const Services = [
        {
            Title :' Branding & Art',
            para:"No matter how big your company is, as you expand and reach new highs you’ll want an agency to have your back",
            bgImg:img1,
            nav:''
        },
        {
            Title :' Branding & Art',
            para:"No matter how big your company is, as you expand and reach new highs you’ll want an agency to have your back",
            bgImg:img2,
            nav:''
        },
        {
            Title :' Branding & Art',
            para:"No matter how big your company is, as you expand and reach new highs you’ll want an agency to have your back",
            bgImg:img3,
            nav:''
        },
        {
            Title :' Branding & Art',
            para:"No matter how big your company is, as you expand and reach new highs you’ll want an agency to have your back",
            bgImg:img4,
            nav:''
        },
        {
            Title :' Branding & Art',
            para:"No matter how big your company is, as you expand and reach new highs you’ll want an agency to have your back",
            bgImg:img5,
            nav:''
        },
        {
            Title :' Branding & Art',
            para:"No matter how big your company is, as you expand and reach new highs you’ll want an agency to have your back",
            bgImg:img6,
            nav:''
        },
        {
            Title :' Branding & Art',
            para:"No matter how big your company is, as you expand and reach new highs you’ll want an agency to have your back",
            bgImg:img4,
            nav:''
        },
        {
            Title :' Branding & Art',
            para:"No matter how big your company is, as you expand and reach new highs you’ll want an agency to have your back",
            bgImg:img5,
            nav:''
        },
        {
            Title :' Branding & Art',
            para:"No matter how big your company is, as you expand and reach new highs you’ll want an agency to have your back",
            bgImg:img6,
            nav:''
        },
       
    ]
    useEffect(() => {
        Aos.init({ once: true });
      }, []);
  
  return (
    <div >
      <section id="bi-service-feed" className="bi-service-feed-section   my-5 inner-page-padding">
		<div className=" container  mx-auto">
        <div className="headings  d-flex flex-column align-items-center  ">
          <h6>WELCOME CREATIVE AGENCY</h6>
          <h2 className="text-dark">Driven by Quality &Dedicated</h2>
        </div>
			<div className="bi-service-feed-content">
				<div className="row justify-content-center ">
                    {
                        Services.map((item,ind)=><div key={ind}  className="col-lg-4 my-2 col-md-4" data-aos="fade-up" data-aos-delay={`${ind+3}00`}>
						<div className="bi-service-feed-item position-relative bg-light" >
							<span className="hover_img position-absolute" style={{backgroundImage:`url(${item.bgImg})`}}></span>
							<span className="serial-number position-absolute">0{ind+1}</span>
							<div className="service-icon position-relative">
								<i className="flaticon-brand"></i>
							</div>
							<div className="service-text headline pera-content ">
								<h3><a href="#" className='text-dark serviceTitle '>{item.Title}</a></h3>
								<p className='servicePara'>{item.para}</p>
								<a className="read_more  d-flex justify-content-center align-items-center text-uppercase" href="#"><i className="fas fa-long-arrow-right"></i></a>
							</div>
						</div>
					</div>)
                    }								
				</div>
			</div>
		</div>
	</section>
    </div>
  )
}

export default Quality
