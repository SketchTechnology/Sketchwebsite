import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './collapse.css';
import { useEffect, useState } from 'react';

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
  useEffect(() => {
   
    const cleanup = () => {
      clearTimeout(timeoutId);
    };
    return () => {
      cleanup();
    };
  }, [toggleNavbar]);

  console.log(anime)
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
          <Nav.Link href="#features" className={`${anime?'animeClickedLeft':''}`} style={{animationDelay:"0.2s"}}>Home</Nav.Link>
          <Nav.Link href="#pricing" className={`${anime?'animeClickedRight':''}`}style={{animationDelay:"0.3s"}}>About</Nav.Link>
          <Nav.Link href="#about" className={`${anime?'animeClickedLeft':''}`} style={{animationDelay:"0.4s"}}>Service</Nav.Link>
          <Nav.Link href="#about" className={`${anime?'animeClickedRight':''}`} style={{animationDelay:"0.5s"}}>Team</Nav.Link>
          <Nav.Link href="#about" className={`${anime?'animeClickedLeft':''}`} style={{animationDelay:"0.6s"}}>Portfolio</Nav.Link>
          <Nav.Link href="#about" className={`${anime?'animeClickedRight':''}`} style={{animationDelay:"0.7s"}}>Blog</Nav.Link>
          {/* Add more Nav.Link components as needed */}
          <div className={`socialMediaBar d-flex justify-content-center flex-wrap rounded-pill border py-2 px-2 align-items-center  gap-3 ${anime?'animeClickedLeft':''}`} style={{animationDelay:"0.8s"}}>
          <i className="fa-brands text-dark fa-instagram"></i>
          <i className="fa-brands text-dark fa-facebook"></i>
          <i className="fa-brands text-dark fa-youtube"></i>
          <i className="fa-brands text-dark fa-linkedin-in"></i>
          <i className="fa-brands fa-tiktok text-dark"></i>
          <i className="fa-brands text-dark  fa-snapchat"></i>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default CollapseNavbar;
