import React, { useState } from 'react';
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ReactTerminal } from 'react-terminal';
import './HeadInfo.css';

const HeadInfo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const welcomeMessage = (
    <span>
      Welcome to the terminal!
      <br />
      <br />
      Get started by typing <strong style={{ color: '#00abfe' }}>help</strong> command below . . .
      <br />
      <br />
    </span>
  );

  const errorMessageStyling = {
    color: 'red',
    marginTop: '5px'
  };

  const promptStyling = {
    color: '#00abfe'
  };

  const textColor = {
    color: 'var(--text-color)'
  };

  const indentLevel1 = {
    marginLeft: '15px'
  };

  const buttonColor = {
    color: 'var(--button-color)'
  };

 const theme = {
    background: 'black',
    promptSymbolColor: '#00abfe',
    commandColor: '#00abfe',
    outputColor: 'var(--text-color)',
    errorOutputColor: 'red',
    fontSize: '1rem',
    spacing: '2%',
    fontFamily: 'Courier New, monospace',
    width: '100%',
    height: '100%',
  };

  
  const commands = {
    help: () => {
      return (
        <div style={{ marginTop: '10px', color: '#ffeeee' }}>
          <p style={textColor}>Available Commands:</p>
          <p style={{marginTop: '10px', marginLeft: '15px'}}>
            <span style={buttonColor}>start: </span>
            <span style={textColor}>get started</span>
          </p>
          <p style={{marginTop: '10px', marginLeft: '15px'}}>
            <span style={buttonColor}>whatiknow: </span>
            <span style={textColor}>tells about my tech knowledge</span>
          </p>
          <p style={{marginTop: '10px', marginLeft: '15px'}}>
            <span style={buttonColor}>clear: </span>
            <span style={textColor}>clears out everything on the terminal</span>
          </p>
          <p style={{marginTop: '10px', marginLeft: '15px'}}>
            <span style={buttonColor}>projects: </span>
            <span style={textColor}>displays my projects</span>
          </p>
        </div>
      );
    },
  
    start: () => {
      return (
        <p style={{marginTop: '10px'}}>
          <span style={{  marginTop: '10px', color: 'var(--text-color)' }}>
          Hey, I am Naman Mittal! Student at{' '}
          <a href="https://skit.ac.in" style={buttonColor}>
            SKIT
          </a>
          , Jaipur.<br/><br/> Explore more about me by using the command "help".
        </span>
        </p>
      );
    },
  
    aboutme: () => {
      return (
        <p style={{marginTop: '10px'}}>
          <span style={{ color: 'var(--text-color)', marginTop: '5px' }}>
          I am Naman Mittal! Student at{' '}
          <a href="https://skit.ac.in" style={buttonColor}>
            SKIT
          </a>
          , Jaipur.
        </span>
        </p>
      );
    },
  
    whatiknow: () => {
      return (
        <p style={{marginTop: '10px'}}>
          <span style={{ color: 'var(--text-color)', lineHeight: '35px' }}>
          Experienced in Full stack development, with <span style={buttonColor}>&nbsp;React.js</span> and its frameworks
          in the front-end part, and <span style={buttonColor}>Node.js</span> in the back-end.
        </span>
        </p>
      );
    },
  
    projects: () => {
      return (
        <p style={{marginTop: '10px'}}>
          <span style={{ color: 'var(--text-color)' }}>
          Here are some of my projects:<br/><br/>
          - Project 1: [Project Name]<br/><br/>
          - Project 2: [Project Name]<br/><br/>
          - Project 3: [Project Name]
          {/* Add more project details */}
        </span>
        </p>
      );
    },
  };

  return (
    <div className="App">
      <header className="header">
        <a href="#" className="logo">
          Naman.
        </a>
        <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptatibus. Id numquam, maiores
            obcaecati architecto voluptas voluptate, facere iusto asperiores accusamus dignissimos quibusdam
            voluptates, exercitationem reprehenderit eaque.
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
          <div style={{ width: '100%', height: '400px', border: '2px solid #fff' }}>
            <ReactTerminal
              prompt={<span style={promptStyling}>$ naman &gt;&gt;</span>}
              commands={commands}
              welcomeMessage={<span style={textColor}>{welcomeMessage}</span>}
              errorMessage={<span style={errorMessageStyling}>Command not found!</span>}
              inputColor="var(--text-color)"
              outputColor="var(--text-color)"
              backgroundColor="var(--background-color)"
              theme={theme}
            />
          </div>
        </div>
        <div className="home-sci">
        <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaDiscord />
          </a>
          
          
        </div>
      </section>
    </div>
  );
};

export default HeadInfo;
