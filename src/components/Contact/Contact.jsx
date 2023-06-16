import React from 'react';
import styles from './Contact.module.css';
import gifImage from '../../assets/contact.gif';

const Contact = () => {
  return (
    <div className={styles.contact}>
        <div className={styles.contactme}>
      <p className="base-text sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
        Discuss a Project &
      </p>
      <h2 className="experience-text text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Let's Connect..
      </h2>
    </div> 
      <div className={styles.contactContainer}>
        <div className={styles.gifContainer}>
          <img src={gifImage} alt="GIF" className={styles.gifImage} />
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="_name"
                className={styles.formControl}
                placeholder="Your Name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                className={styles.formControl}
                name="_replyto"
                placeholder="Your Email"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                className={styles.formControl}
                name="_subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                className={styles.formControl}
                name="_message"
                rows="6"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className={styles.formGroupTextCenter}>
              <button className={styles.btn} type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
