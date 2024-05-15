import "./SideBar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const SideBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [focusedButton, setFocusedButton] = useState(null);
  const [show, setShow] = useState(false);
  const navRef = useRef(null);

  const handleFocus = (id) => {
    setFocusedButton(id);
  };

  useEffect(() => {
    switch (pathname) {
      case "/app":
        setFocusedButton(0);
        break;
      case "/app/events":
        setFocusedButton(1);
        break;
      case "/app/teams":
        setFocusedButton(2);
        break;
      case "/app/AllUsers":
        setFocusedButton(3);
        break;
      case "/app/CreateUser":
        setFocusedButton(4);
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
      data: "Dashboard",
      nav: "/app",
    },
    {
      icon: "fa-regular fa-calendar",
      data: "Events",
      nav: "events",
    },
    {
      icon: "fa-solid fa-users",
      data: "Teams",
      nav: "teams",
    },
    {
      icon: "fa-solid fa-users-viewfinder",
      data: "Users",
      nav: "AllUsers",
    },
    {
      icon: "fa-solid fa-people-group",
      data: "CreateUser",
      nav: "CreateUser",
    },
    {
      icon: "fa-solid fa-users",
      data: "Teams",
      nav: "teams",
    },
    {
      icon: "fa-solid fa-users-viewfinder",
      data: "Users",
      nav: "AllUsers",
    },
    {
      icon: "fa-solid fa-people-group",
      data: "CreateUser",
      nav: "CreateUser",
    },
  ];

  return (
    <nav ref={navRef} className={`MainNav rounded-3 p-4 ${show && 'showNav'}`}>
      <div className="container h-100 d-flex flex-column my-auto justify-content-center align-items-center">
        <div className="ServiceHeading gap-2 d-flex justify-content-center align-items-center">
          <span></span>
          <p className="ServicesTitle">Main Services</p>
          <span></span>
        </div>
        <ul className="d-flex align-items-center h-75 justify-content-center flex-column p-3 gap-3 MainNavList">
          {MenuData.map((item, indx) => (
            <li
              className={`${
                indx === focusedButton && "selectedBtn"
              } gap-3 d-flex align-items-center justify-content-center rounded-3 px-5 py-2 shadow-sm`}
              key={`${item?.icon}-${indx}`}
              onFocus={() => handleFocus(indx)}
              tabIndex={indx}
            >
              <i className={item?.icon}></i>
              <div className="d-flex justify-content-start">
                {item?.data}
              </div>
            </li>
          ))}
        </ul>
        <div className="bi-sidebar-widget headline ul-li-block">
          <div className="add-widget" data-background="assets/img/bg/ad-bg.png">
            <div className="add-widget-area text-center d-flex flex-column justify-content-center align-items-center">
              <div className="add-icon d-flex justify-content-center align-items-center">
                <i className="fas fa-phone"></i>
              </div>
              <div className="add-text pera-content">
                <h3>+215 5747 6654</h3>
                <p className="text-white">
                  Monday – Friday: 7:00 am - 8:00 pm 24/7 Emergency Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-dark text-white rounded-circle border-0 navClick" onClick={showNav}>
      <div>{show? <span>&#10005;</span>:<span>&#8594;</span>}</div>
      </button>
      
    </nav>
  );
};

export default SideBar;
