"use client";

import Link from "next/link";
import styles from "../styles/nav.module.css";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/pages/workPage" },
  { name: "About", link: "/pages/about" },
  { name: "Writing", link: "/pages/blogs" },
  { name: "Contact", link: "/pages/contact" },
];

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className={`${styles.navbarWrapper} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbar}>
        <div className={styles.logoArea}>
          <Link href="/" className={styles.logo}>
            <span>JYOTI</span>
            <span className={styles.logoDot}>.</span>
          </Link>
          <span className={`badge-status ${styles.navBadge}`}>
            <span className={styles.badgeTextFull}>Available for hire</span>
            <span className={styles.badgeTextShort}>Available</span>
          </span>
        </div>

        {/* Desktop Links */}
        <nav className={styles.navlinks}>
          {menuItems.slice(0, 4).map((item, index) => {
            const isActive = pathname === item.link;
            return (
              <Link
                key={index}
                href={item.link}
                className={styles.navLink}
                style={isActive ? { color: "#ffffff", fontWeight: 700 } : {}}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className={styles.rightGroup}>
          <Link href="/pages/contact">
            <button className={styles.ctaBtn}>
              <span>Get in touch</span>
              <span style={{ fontSize: "14px" }}>&rarr;</span>
            </button>
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            className={styles.mobileMenuIcon}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className={`${styles.burgerLine} ${isMobileMenuOpen ? styles.burgerLineOpenTop : ""}`}></span>
            <span className={`${styles.burgerLine} ${isMobileMenuOpen ? styles.burgerLineOpenMid : ""}`}></span>
            <span className={`${styles.burgerLine} ${isMobileMenuOpen ? styles.burgerLineOpenBot : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.mobileDrawerOpen : ""}`}>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}

        <Link href="/pages/contact" onClick={() => setIsMobileMenuOpen(false)}>
          <button className={`${styles.ctaBtn} ${styles.mobileCta}`}>
            Get in touch &rarr;
          </button>
        </Link>

        <div className={styles.mobileSocials}>
          <a
            href="https://github.com/Jyoti-Patowary"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconBtn}
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/jyoti-p-b8a886239/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconBtn}
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://twitter.com/J__Patowary"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconBtn}
            aria-label="Twitter"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="mailto:jpatowary8@gmail.com"
            className={styles.socialIconBtn}
            aria-label="Email"
          >
            <IoMail size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Nav;
