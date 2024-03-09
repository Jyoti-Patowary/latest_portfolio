// components/Footer.js

import styles from '../styles/footer.module.css';
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
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
      <div className={styles.copyrightSection}>
        <p>Copyright © 2024</p>
      </div>
    </div>
  );
};

export default Footer;
