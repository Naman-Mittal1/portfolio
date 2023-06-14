import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ReactTerminal } from 'react-terminal';
import './HeadInfo.css';

const HeadInfo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const welcomeMessage = (
    <span>
      Welcome to my website!
      <br />
      <br />
      Get started by typing <strong style={{ color: '#00abfe' }}>help</strong> command below . . .
      <br />
      <br />
    </span>
  );

  const errorMessageStyling = {
    color: "red",
    marginTop: '5px'
  };

  const promptStyling = {
    color: '#00abfe'
  };



  return (
    <div className="App">
      <header className="header">
        <a href="#" className="logo">
          Naman.
        </a>
        <div
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className={`navbar ${isMenuOpen ? 'show' : ''}`}>
          <a href="#" className="active">
            Home
          </a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <section className="home">
        <div className="home-content">
          <h1>Hi, I'm Naman Mittal</h1>
          <h3>Frontend Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptatibus. Id
            numquam, maiores obcaecati architecto voluptas voluptate, facere iusto asperiores
            accusamus dignissimos quibusdam voluptates, exercitationem reprehenderit eaque.
          </p>
          <div className="btn-box">
            <a href="#" className="hire-button">
              Hire Me
            </a>
            <a href="#" className="talk-button">
              Let's Talk
            </a>
          </div>
        </div>
        <div className="right-side">
          {/* <div className="resume-info">
            <a className="resume-button" href="Resume.jpg" download>
              Download Resume
            </a>
          </div> */}

          <div style={{ width: '100%', height: '400px', border: '2px solid #fff' }}>
            <ReactTerminal
              prompt={<span style={promptStyling}>$ naman &gt;&gt;</span>}
              welcomeMessage={<span>{welcomeMessage}</span>}
              errorMessage={<span style={errorMessageStyling}>Command not found!</span>}
            />
          </div>

        </div>
        <div className="home-sci">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeadInfo;
