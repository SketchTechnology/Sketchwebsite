import  { useEffect, useRef, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CollapseNavbar from './CollapseNavbar';
import { useTranslation } from 'react-i18next';

const MainNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false); // State to track if end of page is reached

  const navbarRef = useRef(null);
  const {t} = useTranslation()
  const toggleNavbar = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Set scrolled state based on scroll position
      setScrolled(scrollPosition > window.innerHeight);
      if (scrollPosition + window.innerHeight == document.body.clientHeight) {
        setReachedEnd(true);
      } else {
        setReachedEnd(false);
      }
  
    
    };
    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove scroll event listener when component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(reachedEnd,'reachedEnd')
  
  // Empty dependency array to run this effect only once
  return (
    <>
    <Navbar
    variant="dark"
    className={`d-flex px-3 px-md-5  justify-content-between ${scrolled ? 'scrolled' : 'NavbarMain'} `}
    style={{backgroundColor:'var(--main-Color)'}}
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
      <span onClick={toggleNavbar} className='collapseBtn' ><i className="fa-solid fa-bars text-white  "></i></span> 
      
      <Navbar.Collapse id="responsive-navbar-nav" className={`justify-content-end ${reachedEnd&&' miniNav'} `}>
          <Nav >
          <Nav.Link href="#features">{t("navigation.home")}</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
          <Nav.Link href="#about">Service</Nav.Link>
          <Nav.Link href="#about">Team</Nav.Link>
          <Nav.Link href="#about">Portfolio</Nav.Link>
          <Nav.Link href="#about">Blog</Nav.Link>
          {/* Add more Nav.Link components as needed */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <CollapseNavbar expanded={expanded} toggleNavbar={toggleNavbar} setExpanded={setExpanded}  />

    </>

  );
};

export default MainNavbar;
