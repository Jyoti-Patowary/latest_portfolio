"use client";

import { useEffect, useState, useCallback } from "react";
import styles from "../styles/footer.module.css";
import { FaArrowUp, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [checkScrollTop]);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Bold Statement Box */}
        <div className={styles.statementBox}>
          <span className={styles.preTitle}>Ready to Start?</span>
          <h2 className={styles.headline}>
            Have an idea in mind? <br />
            Let&apos;s build something <span className={styles.headlineHighlight}>extraordinary</span>.
          </h2>
          <Link href="/pages/contact">
            <button className={`btn-primary ${styles.statementCta}`}>
              Start a Conversation &rarr;
            </button>
          </Link>
        </div>

        {/* Footer Navigation Columns */}
        <div className={styles.footerGrid}>
          <div className={styles.brandCol}>
            <div className={styles.brandLogo}>
              <span>JYOTI</span>
              <span style={{ color: "var(--accent-primary)" }}>.</span>
            </div>
            <p className={styles.brandTagline}>
              Full-Stack Developer crafting fast, scalable, and visually compelling digital experiences from concept to deployment.
            </p>
            <div className={styles.socialRow}>
              <a
                href="https://github.com/Jyoti-Patowary"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/jyoti-p-b8a886239/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://twitter.com/J__Patowary"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Twitter"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href="mailto:jpatowary8@gmail.com"
                className={styles.socialLink}
                aria-label="Email"
              >
                <IoMail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.linkList}>
              <li><Link href="/" className={styles.linkItem}>Home</Link></li>
              <li><Link href="/pages/workPage" className={styles.linkItem}>Featured Work</Link></li>
              <li><Link href="/pages/about" className={styles.linkItem}>My Story</Link></li>
              <li><Link href="/pages/blogs" className={styles.linkItem}>Technical Blogs</Link></li>
              <li><Link href="/pages/contact" className={styles.linkItem}>Contact Me</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Specialization</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>Next.js & React Apps</li>
              <li className={styles.linkItem}>Full-Stack MERN Architecture</li>
              <li className={styles.linkItem}>High-Converting E-Commerce</li>
              <li className={styles.linkItem}>Performance Optimization</li>
              <li className={styles.linkItem}>UI/UX Systems</li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Get In Touch</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="mailto:jpatowary8@gmail.com" className={styles.linkItem}>
                  jpatowary8@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917002495940" className={styles.linkItem}>
                  +91 70024 95940
                </a>
              </li>
              <li className={styles.linkItem} style={{ color: "var(--text-muted)", fontSize: "13px" }}>
                Guwahati, Assam, India <br />
                Available for Remote Worldwide
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>© {currentYear} Jyoti Patowary. Built with Next.js & React.</p>
          <p>Designed for speed, resilience & bold impact.</p>
        </div>
      </div>

      {showScroll && (
        <button className={styles.backToTop} onClick={scrollTop} aria-label="Scroll back to top">
          <FaArrowUp size={16} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
