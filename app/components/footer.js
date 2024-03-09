'use client'
import { useEffect, useState } from 'react';
import styles from '../styles/footer.module.css';
import { FaArrowUp, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.footerText}> From Unexpected Spark to Thriving Developer</p>

        <div className={styles.followSection}>
          {/* <p className={styles.followText}>Follow Me on :</p> */}
          <a href="https://twitter.com/J__Patowary" target='_blank' className={styles.aboutSocialIcon}><FaXTwitter size={25}/></a>
              <a href="https://github.com/Jyoti-Patowary" target='_blank' className={styles.aboutSocialIcon}><FaGithub size={25}/></a>
              <a href="https://www.linkedin.com/in/jyoti-p-b8a886239/" target='_blank' className={styles.aboutSocialIcon}><FaLinkedinIn size={25}/></a>
        </div>

        {/* <div className={styles.newsSection}>
          <p className={styles.newsText}>Newsletter</p>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} /> I accept with this Condition
          </label>
          <br />
          <label>Email Me:</label>
          <input type="email" placeholder="contact@paradox.com" className={styles.emailInput} />
        </div> */}

      </div>

      {showScroll && (
        <div className={styles.backToTop} onClick={scrollTop}>
          <FaArrowUp size={15} />
        </div>
      )}
      <div className={styles.copyrightSection}>
          <p>Copyright © {currentYear}</p>
        </div>
    </div>
  );
};

export default Footer;
