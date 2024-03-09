"use client"

import Link from "next/link";
import styles from "../styles/nav.module.css";
import { useState } from "react";
import Image from "next/image";

const menu_items = [
  { name: 'Work', link: "./portfolio" },
  { name: 'Expertise', link: "/services" },
  { name: 'Why us?', link: "/about" },
  { name: 'Blogs', link: "/blog" },
  // { name: 'Contact', link: "/contact" },
];

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };


  return (
    <div className={styles.navbar}>
        <nav className={styles.nav_container}>
      <div className={styles.logo}>
        <Image src="/logo.png" width={50} height={50} alt="logo"/>
        <span className={styles.dot}>EEP.</span>
      </div>

      {/* Desktop View */}
      <div className={styles.navlinks}>
        {menu_items.map((item, index) => (
          <Link key={index} href={item.link} className={styles.link}>
            {item.name}
          </Link>
        ))}
          <button className={styles.button}>Contact Us</button>
      </div>

    
      {/* Mobile View */}
      <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
        ☰
      </div>
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ""}`}>
        <div className={styles.closeButton} onClick={closeMobileMenu}>
          &times;
        </div>
        {menu_items.map((item, index) => (
          <Link key={index} href={item.link}>
            <span className={styles.link} onClick={closeMobileMenu}>
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
    </div>
  
  );
}

export default Nav;
