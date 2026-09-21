"use client";

import React from "react";
import styles from "../styles/about.module.css";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import Deep from "../assets/deep.webp";

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          {/* Left Column: Portrait */}
          <div className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <Image
                src={Deep}
                alt="Jyoti Patowary"
                className={styles.aboutProfileImg}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
          </div>

          {/* Right Column: Grounded Human Narrative */}
          <div className={styles.textCol}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>From hospitality to code</span>
              <h2 className={styles.sectionTitle}>
                Who I am.
              </h2>
            </div>

            <p className={styles.narrativeText}>
              I didn&apos;t start out as a developer. I spent years in hospitality management before I taught myself to code. Sounds like a strange jump. It wasn&apos;t, really — hotels teach you to read people fast, stay calm when everything&apos;s on fire, and notice the small stuff that ruins an experience if you miss it.
            </p>

            <p className={styles.narrativeText}>
              Turns out that&apos;s exactly what good web development needs too. You&apos;re not just writing functions. You&apos;re thinking about the person on the other end — will this load fast enough, is this button where they expect it, does this actually solve their problem.
            </p>

            <p className={styles.narrativeText}>
              That&apos;s the lens I bring to every project now, whether it&apos;s a Shopify store or a full-stack app from scratch.
            </p>

            <ul className={styles.bulletList}>
              <li><strong>Client empathy.</strong> I ask what the business actually needs before I touch a keyboard.</li>
              <li><strong>Modern stack.</strong> Next.js, React Server Components, TypeScript — the tools that let me build fast without cutting corners.</li>
            </ul>

            {/* Actions & Socials */}
            <div className={styles.actionRow}>
              <Link href="/pages/about">
                <button className="btn-secondary">
                  <span>Read my full story</span>
                  <span>&rarr;</span>
                </button>
              </Link>

              <div className={styles.socialIcons}>
                <a
                  href="https://github.com/Jyoti-Patowary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="GitHub"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jyoti-p-b8a886239/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={16} />
                </a>
                <a
                  href="https://twitter.com/J__Patowary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="Twitter"
                >
                  <FaXTwitter size={16} />
                </a>
                <a
                  href="mailto:jpatowary8@gmail.com"
                  className={styles.socialBtn}
                  aria-label="Email"
                >
                  <IoMail size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
