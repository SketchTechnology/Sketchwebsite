import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import iconImg from '../../assets/img/new_home/icon/style-arrow-right.png'
import './ServiceBar.css'
const ServiceBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [focusedButton, setFocusedButton] = useState(null);
  const [show, setShow] = useState(false);
  const navRef = useRef(null);

  const handleFocus = (id,item) => {
    setFocusedButton(id);
    navigate(item.nav)
  };

  useEffect(() => {
    switch (pathname) {
      case "DesignAndDevelopment":
        setFocusedButton(0);
        break;
      default:
    }
  }, [pathname]);

  const showNav = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (show && navRef.current && !navRef.current.contains(event.target)) {
        showNav();
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  const MenuData = [
    {
      icon: "fa-solid fa-house",
      data: "UI&Ux",
      nav: "DesignAndDevelopment",
    },
    {
      icon: "fa-regular fa-calendar",
      data: "Web Dev",
      nav: "WebDev",
    },
    {
      icon: "fa-regular fa-calendar",
      data: "Web Dev",
      nav: "WebDev",
    },
  
   
  ];

  return (
    <nav ref={navRef} className={`ServiceBar  rounded-3  ${show && 'showNav'}`}>
      <div className="container h-100 d-flex flex-column my-auto justify-content-center align-items-center">
        <div className="ServiceHeading gap-2 d-flex justify-content-center align-items-center">
          <span></span>
          <p className="ServicesTitle">Services</p>
          <span></span>
        </div>
        <ul className="d-flex  align-items-center  justify-content-center flex-column p-3 gap-3 MainNavList">
          {MenuData.map((item, indx) => (
            <>
            <li
              className={`${
                  indx === focusedButton && "selectedBtn"
                } gap-3 d-flex align-items-center border justify-content-center position-relative text-dark rounded-3 px-5 py-2 shadow-sm`}
                key={`${item?.icon}-${indx}`}
                onFocus={() => handleFocus(indx,item)}
                tabIndex={indx}
                >

              <i className={item?.icon}></i>
              <div className="d-flex justify-content-start ">
                {item?.data}
              </div>
              {focusedButton === indx && (
                <div className="selecetedArrow">
                  <img src={iconImg} alt="selected arrow" />
                </div>
              )}
            </li>
        
           
                </>
          ))}
        </ul>
    
      </div>
      <button className="bg-dark text-white rounded-circle border-0 navClick" onClick={showNav}>
      <div>{show? <span>&#10005;</span>:<span>&#8594;</span>}</div>
      </button>
      
    </nav>
  );
};

export default ServiceBar;
