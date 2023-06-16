import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin, FaTwitter, FaEnvelope, FaGithub, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="https://www.linkedin.com/in/namanmittal1/">
        <FaLinkedin className={styles.socialicon} />
      </a>
      <a href="https://twitter.com/_naman_mittal">
        <FaTwitter className={styles.socialicon} />
      </a>
      <a href="mailto:mittalnaman08@gmail.com">
        <FaEnvelope className={styles.socialicon} />
      </a>
      <a href="https://github.com/Naman-Mittal1">
        <FaGithub className={styles.socialicon} />
      </a>
      <a href="https://linktr.ee/naman_mittal">
        <FaDiscord className={styles.socialicon} />
      </a>
      <p>
        Designed &amp; Developed with ❤️ by 
        <a href="https://www.linkedin.com/in/namanmittal1">Naman Mittal   </a>
      </p>
    </div>
  );
};

export default Footer;
