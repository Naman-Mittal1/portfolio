import React, { useState } from 'react';
import { FaDiscord, FaDownload, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ReactTerminal } from 'react-terminal';
import Typewriter from 'typewriter-effect';
import './HeadInfo.css';

const HeadInfo = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
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
    height: '100%'
  };

  const commands = {
    help: () => {
      return (
        <div style={{ marginTop: '10px', color: '#ffeeee' }}>
          <p style={textColor}>Available Commands:</p>
          <p style={{ marginTop: '10px', marginLeft: '15px' }}>
            <span style={buttonColor}>start: </span>
            <span style={textColor}>get started</span>
          </p>
          <p style={{ marginTop: '10px', marginLeft: '15px' }}>
            <span style={buttonColor}>whatiknow: </span>
            <span style={textColor}>tells about my tech knowledge</span>
          </p>
          <p style={{ marginTop: '10px', marginLeft: '15px' }}>
            <span style={buttonColor}>clear: </span>
            <span style={textColor}>clears out everything on the terminal</span>
          </p>
          <p style={{ marginTop: '10px', marginLeft: '15px' }}>
            <span style={buttonColor}>projects: </span>
            <span style={textColor}>displays my projects</span>
          </p>
        </div>
      );
    },

    start: () => {
      return (
        <p style={{ marginTop: '10px' }}>
          <span style={{ marginTop: '10px', color: 'var(--text-color)' }}>
            Hey, I am Naman Mittal! Student at{' '}
            <a href="https://skit.ac.in" style={buttonColor}>
              SKIT
            </a>
            , Jaipur.<br />
            <br /> Explore more about me by using the command "help".
          </span>
        </p>
      );
    },

    naman: () => {
      return (
        <p style={{ marginTop: '10px' }}>
          <span style={{ marginTop: '10px', color: 'var(--text-color)' }}>
            Yay! You got the hidden command. I am Naman Mittal <br /> <br /> Find some tough ones now ..
          </span>
        </p>
      );
    },

    aboutme: () => {
      return (
        <p style={{ marginTop: '10px' }}>
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
        <p style={{ marginTop: '10px' }}>
          <span style={{ color: 'var(--text-color)', lineHeight: '35px' }}>
            Experienced in Full stack development, with <span style={buttonColor}>&nbsp;React.js</span> and its frameworks
            in the front-end part, and <span style={buttonColor}>Node.js</span> in the back-end.
          </span>
        </p>
      );
    },

    projects: () => {
      return (
        <p style={{ marginTop: '10px' }}>
          <span style={{ color: 'var(--text-color)' }}>
            Here are some of my projects:<br />
            <br />
            - Project 1: [Project Name]<br />
            <br />
            - Project 2: [Project Name]<br />
            <br />
            - Project 3: [Project Name]
            {/* Add more project details */}
          </span>
        </p>
      );
    }
  };

  return (
    <div className="App">
     <header className="header">
  <a href="#" className="logo">
    Naman.
  </a>
  <div className={`hamburger-menu ${isActive ? 'active' : ''}`} onClick={toggleMenu}>          
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
  </div>
  <nav className={`navbar ${isActive ? 'show' : ''}`}>
    <a href="#" className="active">
      Home
    </a>
    <a href="#">Skillset</a>
    <a href="#">Work Experience</a>
    <a href="#">Projects</a>
    <a href="#">Let's Connect</a>
  </nav>
</header>

      <section className="home">
        <div className="home-content">
          <h1>
            Hi, I'm Naman Mittal
            {/* <br /> */}
          </h1>
          <h3>
            <Typewriter
              options={{
                strings: ['Copy Paste Developer', 'Developer', 'College'],
                autoStart: true,
                loop: true
              }}
            />
          </h3>

          <p>
            Skilled MERN Developer, looking for opportunities to show and create unique applications. Interested in
            Designing, working on creative Ideas, and using modern technology. <br /> <br /> Also love to stay up-to-date
            with chess. Explore the terminal you may find some new commands.
          </p>
          <div className="btn-box">
            <a href="#" className="hire-button" style={{ width: '60%' }}>
              Let's Talk
            </a>
            <a href="#" className="talk-button" style={{ display: 'flex', justifyContent: 'space-around', width: '60%' }}>
              Resume <FaDownload />
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
          <a href="https://www.linkedin.com/in/namanmittal1/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Naman-Mittal1">
            <FaGithub />
          </a>
          <a href="https://twitter.com/_naman_mittal">
            <FaTwitter />
          </a>
          <a href="https://linktr.ee/naman_mittal">
            <FaDiscord />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeadInfo;
