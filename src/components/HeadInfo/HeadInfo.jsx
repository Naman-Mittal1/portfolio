import React, { useState } from "react";
import {
  FaDiscord,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { ReactTerminal } from "react-terminal";
import { Link, useLocation } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/Resume.pdf";
import "./HeadInfo.css";

const HeadInfo = () => {
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);

  const handleSkillsetClick = (event) => {
    event.preventDefault();
    const skillsetElement = document.getElementById("skillset");

    if (skillsetElement) {
      skillsetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWorkExperienceClick = (event) => {
    event.preventDefault();
    const handleWorkExperience = document.getElementById("work-experience");

    if (handleWorkExperience) {
      handleWorkExperience.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectClick = (event) => {
    event.preventDefault();
    const handleProject = document.getElementById("project-info");

    if (handleProject) {
      handleProject.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    // Scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  const welcomeMessage = (
    <span>
      Welcome to the terminal!
      <br />
      <br />
      Get started by typing <strong style={{ color: "#00abfe" }}>
        help
      </strong>{" "}
      command below . . .
      <br />
      <br />
    </span>
  );

  const errorMessageStyling = {
    color: "red",
    marginTop: "5px",
  };

  const promptStyling = {
    color: "#00abfe",
  };

  const textColor = {
    color: "var(--text-color)",
  };

  const buttonColor = {
    color: "var(--button-color)",
  };

  const theme = {
    background: "black",
    promptSymbolColor: "#00abfe",
    commandColor: "#00abfe",
    outputColor: "var(--text-color)",
    errorOutputColor: "red",
    fontSize: "1rem",
    spacing: "2%",
    fontFamily: "Courier New, monospace",
    width: "100%",
    height: "100%",
  };

  const commands = {
    help: () => {
      return (
        <div style={{ marginTop: "10px", color: "#ffeeee" }}>
          <p style={textColor}>Available Commands:</p>
          <p style={{ marginTop: "10px", marginLeft: "15px" }}>
            <span style={buttonColor}>start: </span>
            <span style={textColor}>get started</span>
          </p>
          <p style={{ marginTop: "10px", marginLeft: "15px" }}>
            <span style={buttonColor}>whatiknow: </span>
            <span style={textColor}>tells about my tech knowledge</span>
          </p>
          <p style={{ marginTop: "10px", marginLeft: "15px" }}>
            <span style={buttonColor}>clear: </span>
            <span style={textColor}>clears out everything on the terminal</span>
          </p>
          <p style={{ marginTop: "10px", marginLeft: "15px" }}>
            <span style={buttonColor}>projects: </span>
            <span style={textColor}>displays my projects</span>
          </p>
          <p style={{ marginTop: "10px", marginLeft: "15px" }}>
            <span style={buttonColor}>chess: </span>
            <span style={textColor}>let's connect.. get my chess.com username using this command</span>
          </p>
        </div>
      );
    },

    start: () => {
      return (
        <p style={{ marginTop: "10px" }}>
          <span style={{ marginTop: "10px", color: "var(--text-color)" }}>
            Hey, I am Naman Mittal! Student at{" "}
            <a href="https://skit.ac.in" style={buttonColor}>
              SKIT
            </a>
            , Jaipur.
            <br />
            <br /> Explore more about me by using the command "help".
          </span>
        </p>
      );
    },

    naman: () => {
      return (
        <p style={{ marginTop: "10px" }}>
          <span style={{ marginTop: "10px", color: "var(--text-color)" }}>
            Yay! You got the hidden command. I am Naman Mittal <br /> <br />{" "}
           long way to go ..
          </span>
        </p>
      );
    },

    hey: () => {
      return (
        <p style={{ marginTop: "10px" }}>
          <span style={{ marginTop: "10px", color: "var(--text-color)" }}>
            Hey!! How are youu?{" "}
          </span>
        </p>
      );
    },

    aboutme: () => {
      return (
        <p style={{ marginTop: "10px" }}>
          <span style={{ color: "var(--text-color)", marginTop: "5px" }}>
            I am Naman Mittal! Student at{" "}
            <a href="https://skit.ac.in" style={buttonColor}>
              SKIT
            </a>
            , Jaipur. <br /> <br />
            Skilled MERN Developer, looking for opportunities to show and create unique applications.
          </span>
        </p>
      );
    },

    chess: () => {
      return (
        <p style={{ marginTop: "10px" }}>
          <span style={{ color: "var(--text-color)", marginTop: "5px" }}>
            Let's connect and play chess on chess.com, Here's my username: idynamic            
          </span>
        </p>
      );
    },

    whatiknow: () => {
      return (
        <p style={{ marginTop: "10px" }}>
          <span style={{ color: "var(--text-color)", lineHeight: "35px" }}>
            Experienced in Full stack development, with{" "}
            <span style={buttonColor}>&nbsp;React.js</span> and its frameworks
            in the front-end part, and <span style={buttonColor}>Node.js</span>{" "}
            in the back-end.
          </span>
        </p>
      );
    },

    projects: () => {
      return (
        <p style={{ marginTop: "10px" }}>
          <span style={{ color: "var(--text-color)" }}>
            Here are some of my projects:
            <br />
            <br />
            - Project 1: Recipe Website
            <br />
            <br />
            - Project 2: MetaBlock Technologies Website
            <br />
            <br />- Project 3: Agrisar

            <br /> <br /> Get more project details in Projects section
            {/* Add more project details */}
          </span>
        </p>
      );
    },
  };

  const isActive = location.pathname !== "/";

  return (
    <div className="App">
      <header className={`header ${showContent ? "transition" : ""}`}>
        <Link to="/" className="logo" onClick={handleLogoClick}>
          Naman.
        </Link>
        <div
          className={`hamburger-menu ${isActive ? "active" : ""}`}
          onClick={() => window.location.replace("/")}
        ></div>
        <nav className={`navbar ${isActive ? "show" : ""}`}>
          <Link to="/" className="logo" onClick={handleLogoClick}>
            Home
          </Link>
          <Link to="/" onClick={handleSkillsetClick}>
            Skillset
          </Link>
          <Link to="/" onClick={handleWorkExperienceClick}>
            Work Experience
          </Link>
          <Link to="/" onClick={handleProjectClick}>
            Projects
          </Link>
          <Link to="https://linktr.ee/naman_mittal">Let's Connect</Link>
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
                strings: [
                  "Full Stack Developer",
                  "Tech Enthusiast",
                  "Open Source Contributor",
                  "Web Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>

          <p>
            Skilled MERN Developer, looking for opportunities to show and create
            unique applications. Interested in Designing, working on creative
            Ideas, and using modern technology. <br /> <br /> Also love to stay
            up-to-date with chess. Explore the terminal you may find some new
            commands.
          </p>
          <div className="btn-box">
            <Link
              to="https://www.linkedin.com/in/namanmittal1/"
              className="hire-button"
              style={{ width: "60%" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's Talk
            </Link>
            <a
              href={Resume}
              className="talk-button"
              style={{
                display: "flex",
                backgroundColor: "rgb(6, 143, 208)",
                color: "white",
                justifyContent: "space-around",
                width: "60%",
                textDecoration: "none",
              }}
              download="Resume.pdf"
            >
              Resume <FaDownload />
            </a>
          </div>
        </div>
        <div className="right-side">
          <div
            style={{ width: "100%", height: "400px", border: "2px solid #fff" }}
          >
            <ReactTerminal
              prompt={<span style={promptStyling}>$ naman &gt;&gt;</span>}
              commands={commands}
              welcomeMessage={<span style={textColor}>{welcomeMessage}</span>}
              errorMessage={
                <span style={errorMessageStyling}>Command not found!</span>
              }
              inputColor="var(--text-color)"
              outputColor="var(--text-color)"
              backgroundColor="var(--background-color)"
              theme={theme}
            />
          </div>
        </div>
        <div className="home-sci">
          <a
            href="https://www.linkedin.com/in/namanmittal1/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Naman-Mittal1"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/_naman_mittal"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linktr.ee/naman_mittal"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaDiscord />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeadInfo;
