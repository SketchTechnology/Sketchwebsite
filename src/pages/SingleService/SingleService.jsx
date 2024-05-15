import React from "react";
import { Outlet } from "react-router";
import SideBar from "../../components/SideBar/SideBar";
import HeadSec from "../../components/HeadSec/HeadSec";
import "./ServiceSingle.css";
import SimpleCard from "../../components/Cards/SimpleCard";
const SingleService = () => {
  const BtnsContent = [
    {
      content: "Home",
      nav: "/",
      active: false,
    },
    {
      content: "service Name",
      nav: "",
      active: true,
    },
  ];
  const Title = "service Name";

  return (
    <div className="bg-white">
      <HeadSec BtnsContent={BtnsContent} Title={Title} />
      <div className="d-flex container-fluid container-md mx-auto ">
        <SideBar />
        <div
          className=" align-items-center bg-white p-0 p-md-5 w-100 "
         
        >
          <div className="border w-100 h-100 rounded d-flex justify-content-start container py-3 align-items-center flex-column">
            <div className="serviceImg w-100  border-5">
              <img
                src="https://sketch-tech.com/wp-content/uploads/2023/08/section-2-banner.jpg"
                alt=""
              />
            </div>
            <div className="SingleServTitle">
              <p>
              Design & Development
              </p>
            </div>
            <div className="servContent">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a libero maximus, rhoncus ex vel, suscipit velit. Donec in interdum nisl. Curabitur fringilla turpis sed nulla auctor, laoreet mollis sem maximus. Suspendisse laoreet feugiat accumsan. Sed mollis, augue a ultrices convallis, dolor metus eleifend nulla, at efficitur lacus nisi sit amet est. Morbi rutrum ullamcorper orci eu auctor. In hac habitasse platea dictumst. Integer venenatis eu arcu et convallis. Vestibulum in lacinia sem, quis aliquet turpis. Fusce bibendum posuere velit, ut auctor leo aliquam vel. Suspendisse ut pharetra urna. Duis ultricies odio ullamcorper, tempor enim id, volutpat nunc. In tellus erat, pellentesque ut erat at, suscipit pharetra mauris. Proin gravida dictum lectus, sed bibendum mauris elementum non. Pellentesque mi erat, pulvinar sed rhoncus id, euismod non turpis.
              </p>
            </div>
            <div className="ServicesCards row justify-content-center">
              <div className="col-12 my-2 col-md-6">
                <SimpleCard/>
              </div>
              <div className="col-12 my-2 col-md-6">
                <SimpleCard/>
              </div>
              <div className="col-12 my-2 col-md-6">
                <SimpleCard/>
              </div>
              <div className="col-12 my-2 col-md-6">
                <SimpleCard/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
