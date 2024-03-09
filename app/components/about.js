import React from 'react';
import styles from '../styles/about.module.css';
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';

function About() {
  return (
    <div>
      <section id={styles.about} className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <div className={styles.imageContainer}>
              <Image src="" alt="Your Alt Text" className={styles.profileImage} width={0} height={0} sizes='100vw'/>
            </div>
            <div className={styles.textContainer}>
              <h1 className={styles.aboutTitle}>About me</h1>
              {/* <p className={styles.aboutText}>
                Hi there! I'm [Your Name], a seasoned web developer with a passion for turning ideas into pixel-perfect realities. With over [Number] years of experience, I specialize in [Specific skills], driven by the desire to create functional and beautiful web experiences that help businesses thrive online.
              </p> */}
              <p className={styles.aboutText}>
                Hi, I&apos;m [Your Name]!
              </p>
              <p className={styles.aboutText}>
                I&apos;m a self-taught developer who found my passion for coding. Even though I come from a different background in [Your Previous Field], I decided to take a chance and jump into the exciting world of coding. It&apos;s been challenging, but I&apos;m learning and creating every day, and that&apos;s what keeps me going.
              </p>
              {/* <p className={styles.aboutText}>
                Beyond coding, I&apos;m committed to open and transparent communication, meeting deadlines, and bringing fresh ideas to every project I undertake.
              </p>
              <p className={styles.aboutText}>
                Ready to explore how we can collaborate? Let&apos;s turn your digital dreams into reality. Click below to explore my work and take the next step!
              </p> */}
              <div className={styles.aboutMe}>
                <Link className={styles.ctaButton} href="/pages/portfolio-details" >Know more</Link>
                <div className={styles.aboutSocial}>
                  <a href="https://twitter.com/J__Patowary" target='_blank' className={styles.aboutSocialIcon}><FaXTwitter size={25} /></a>
                  <a href="https://github.com/Jyoti-Patowary" target='_blank' className={styles.aboutSocialIcon}><FaGithub size={25} /></a>
                  <a href="https://www.linkedin.com/in/jyoti-p-b8a886239/" target='_blank' className={styles.aboutSocialIcon}><FaLinkedinIn size={25} /></a>
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
