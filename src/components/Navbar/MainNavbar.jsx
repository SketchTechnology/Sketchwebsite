import { useEffect, useRef, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CollapseNavbar from './CollapseNavbar';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CallButton from '../CallButton/CallButton';

const MainNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);

  const navbarRef = useRef(null);
  const { t } = useTranslation();

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      setScrolled(scrollPosition > windowHeight );
      if (scrollPosition + windowHeight >= documentHeight ) {
        setReachedEnd(true);
      } else {
        setReachedEnd(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        variant="dark"
        className={`${reachedEnd?"opacity-0":"opacity-100"} border border-5 d-flex px-3 px-md-5 justify-content-between ${scrolled ? 'scrolled' : 'NavbarMain'}`}
        style={{ backgroundColor: 'var(--main-Color)' }}
        ref={navbarRef}
      >
        <Navbar.Brand
          href="#home"
          className="d-flex justify-content-start"
          style={{ height: '50px', width: '150px' }}
        >
          <img
            src="https://sketchtechnology.github.io/digitalAgency/sketch/assets/img/logo/sketch.png"
            alt="logoImg"
            width={'100%'}
            height={'100%'}
            style={{ objectFit: 'contain' }}
          />
        </Navbar.Brand>
        <span onClick={toggleNavbar} className='collapseBtn'>
          <i className="fa-solid fa-bars text-white"></i>
        </span>
        <Navbar.Collapse id="responsive-navbar-nav" className={`justify-content-end ${reachedEnd && 'miniNav'}`}>
          <Nav>
            <Link className='nav-link' to={'/'}>
              {t("navigation.Home")}
            </Link>
            <Link className='nav-link' to={'AboutUs'}>
              {t("navigation.About")}
            </Link>
            <Link className='nav-link' to={'Services'}>
              {t("navigation.Service")}
            </Link>
            <Nav.Link href="#about">
              {t("navigation.Portoflio")}
            </Nav.Link>
            <Nav.Link href="#about" >
              {t("navigation.Blog")}
            </Nav.Link>
            <Link to={'ContactUs'} className='nav-link'>
           Contact us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <CollapseNavbar expanded={expanded} toggleNavbar={toggleNavbar} setExpanded={setExpanded} />
    </>
  );
};

export default MainNavbar;
