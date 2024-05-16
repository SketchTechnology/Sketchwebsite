import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './collapse.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CollapseNavbar = ({ expanded, toggleNavbar }) => {
  const [anime, setAnime] = useState(false);
  let timeoutId;

  const animeClicked = () => {
    setAnime(true);
    timeoutId = setTimeout(() => {
      setAnime(false); 
      toggleNavbar();
    }, 1000);
  };

  const handleLinkClick = () => {
    setTimeout(() => {
      animeClicked();
    }, 200); // 0.5 seconds delay before invoking animeClicked
  };

  const { t } = useTranslation();

  useEffect(() => {
    const cleanup = () => {
      clearTimeout(timeoutId);
    };
    return () => {
      cleanup();
    };
  }, [toggleNavbar]);

  return (
    <div className={expanded ? 'shows' : 'hideNav'}>
      <Navbar data-bs-theme="dark" className='h-75 w-100 d-flex justify-content-center'>
        <Container className='collapseBar gap-2'>
          <span onClick={animeClicked}><i className="fa-solid fa-close"></i></span>
          <Navbar.Brand
            href="#home"
            className={`logoColapse ${anime ? 'animeClickedRight' : ''}`}
            style={{ height: '100px', width: '200px', objectFit: 'contain', animationDelay: "0.1s" }}
          >
            <img
              src="https://sketch-tech.com/wp-content/uploads/2023/07/sketch-logo.png"
              alt="logoImg"
              width={'100%'}
              height={'100%'}
              style={{ objectFit: 'contain' }}
            />
          </Navbar.Brand>
          <Link 
            className={`${anime ? 'animeClickedLeft' : 'nav-link'}`} 
            style={{ animationDelay: "0.2s" }}  
            to={'/'}
            onClick={handleLinkClick}
          >
            {t("navigation.Home")}
          </Link>
          <Link 
            to={'AboutUs'}  
            className={`${anime ? 'animeClickedRight' : 'nav-link'}`} 
            style={{ animationDelay: "0.3s" }} 
            onClick={handleLinkClick}
          >
            {t("navigation.About")}
          </Link>
          <Link 
            to={'Services'}   
            className={`${anime ? 'animeClickedLeft' : 'nav-link'}`} 
            style={{ animationDelay: "0.4s" }} 
            onClick={handleLinkClick}
          >
            {t("navigation.Service")}
          </Link>
          <Nav.Link 
            href="#about" 
            className={`${anime ? 'animeClickedRight' : ''}`} 
            style={{ animationDelay: "0.5s" }} 
            onClick={handleLinkClick}
          >
            {t("navigation.Portoflio")}
          </Nav.Link>
          <Nav.Link 
            href="#about" 
            className={`${anime ? 'animeClickedLeft' : ''}`} 
            style={{ animationDelay: "0.6s" }} 
            onClick={handleLinkClick}
          >
            {t("navigation.Blog")}
          </Nav.Link>
          <Nav.Link 
            href="#about" 
            className={`${anime ? 'animeClickedRight' : ''}`} 
            style={{ animationDelay: "0.7s" }} 
            onClick={handleLinkClick}
          >
            ContactUs
          </Nav.Link>
          
          {/* Add more Nav.Link components as needed */}
          <div 
            className={`socialMediaBar d-flex justify-content-center flex-wrap rounded-pill border py-2 px-2 align-items-center gap-3 ${anime ? 'animeClickedLeft' : ''}`} 
            style={{ animationDelay: "0.8s" }}
          >
            <i className="fa-brands text-dark fa-instagram"></i>
            <i className="fa-brands text-dark fa-facebook"></i>
            <i className="fa-brands text-dark fa-youtube"></i>
            <i className="fa-brands text-dark fa-linkedin-in"></i>
            <i className="fa-brands fa-tiktok text-dark"></i>
            <i className="fa-brands text-dark fa-snapchat"></i>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default CollapseNavbar;
