import React from 'react';
import styles from '../styles/about.module.css';
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';
import Deep from '../assets/deep.jpeg';

function About() {
  return (
    <div>
      <section id={styles.about} className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <div className={styles.imageContainer}>
              <Image src={Deep} alt="Your Alt Text" className={styles.profileImage} width="auto" height="auto" />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.aboutHeading}>
              <h1 className={styles.aboutTitle}>Jyoti Patowary</h1>
              <h4 className={styles.aboutSubTitle}>Web Developer | Freelancer</h4>
              </div>
              <Link className={styles.ctaButton} href="/pages/about" >Know more</Link>
              <p className={styles.aboutText}>
              By day, I&apos;m a web developer, but my passion for crafting websites extends beyond the traditional office. I also freelance, which allows me to work on exciting new projects and collaborate with a variety of clients.
              </p>
              <div className={styles.aboutMe}>
               
                <div className={styles.aboutSocial}>
                  <a href="mailto:jpatowary8@gmail.com" target='_blank' className={styles.aboutSocialIcon}><IoMail size={25} /></a>
                  <a href="https://github.com/Jyoti-Patowary" target='_blank' className={styles.aboutSocialIcon}><FaGithub size={25} /></a>
                  <a href="https://www.linkedin.com/in/jyoti-p-b8a886239/" target='_blank' className={styles.aboutSocialIcon}><FaLinkedinIn size={25} /></a>
                  <a href="https://twitter.com/J__Patowary" target='_blank' className={styles.aboutSocialIcon}><FaXTwitter size={25} /></a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
