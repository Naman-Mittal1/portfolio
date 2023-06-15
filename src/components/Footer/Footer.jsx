import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin, FaTwitter, FaEnvelope, FaGithub, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="https://www.linkedin.com/in/salokya-kumar/">
        <FaLinkedin className={styles.socialicon} />
      </a>
      <a href="https://twitter.com/ksalokya">
        <FaTwitter className={styles.socialicon} />
      </a>
      <a href="mailto:kumar.salokya007@gmail.com">
        <FaEnvelope className={styles.socialicon} />
      </a>
      <a href="https://github.com/your-github-profile">
        <FaGithub className={styles.socialicon} />
      </a>
      <a href="https://discord.gg/your-discord-server">
        <FaDiscord className={styles.socialicon} />
      </a>
      <p>
        Designed &amp; Developed with ❤️ by 
        <a href="https://www.linkedin.com/in/salokya-kumar/">Naman Mittal   </a>
      </p>
    </div>
  );
};

export default Footer;
