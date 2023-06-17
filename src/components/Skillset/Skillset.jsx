import React from "react";
import styles from "./Skillset.module.css";
import { Tilt } from "react-tilt";
import HTML5 from '../../assets/HTML5.png';
import MongoDB from '../../assets/mongodb.png';
import Cplus from '../../assets/C++.png';
import css from '../../assets/css.png';
import JQuery from '../../assets/Jquery.png';
import Javascript from '../../assets/js.png';
import Reactimg from '../../assets/react.png';
import Nodejs from '../../assets/nodejs.png';
import github from '../../assets/github.png';
import git from '../../assets/git.png';

const Skillset = () => {
  return (
    <>
    <div className={styles.skillsetmodule} id="skillset">
    <div className={styles.skillsetme}>
      <p className="base-text sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
      Worked with Technologies & Tools
      </p>
      <h2 className="experience-text text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Skillset
      </h2>
    </div>
    <div className={`${styles.skillset} ${styles.border}`}>
    <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={Javascript} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>Javascript</h3>
        </div>
      </Tilt>

      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={Reactimg} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>React</h3>
        </div>
      </Tilt>

      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={MongoDB} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>MongoDB</h3>
        </div>
      </Tilt>

      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={Nodejs} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>NodeJS</h3>
        </div>
      </Tilt>

      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={JQuery} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>JQuery</h3>
        </div>
      </Tilt>
      
    </div>
    <div className={`${styles.skillset} ${styles.border}`}>
      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={HTML5} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>HTML 5</h3>
        </div>
      </Tilt>

      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={css} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>CSS</h3>
        </div>
      </Tilt>

      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={Cplus} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>C++</h3>
        </div>
      </Tilt>
      
      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={git} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>Git</h3>
        </div>
      </Tilt>

      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={github} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>GitHub</h3>
        </div>
      </Tilt>
    </div>
    </div>
    </>
  );
};

export default Skillset;
