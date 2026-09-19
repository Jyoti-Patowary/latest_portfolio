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
          {/* Left Column: Portrait with Floating Badge */}
          <div className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <Image
                src={Deep}
                alt="Jyoti Patowary"
                className={styles.aboutProfileImg}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 420px"
              />
              <div className={styles.floatingExperienceBadge}>
                <span className={styles.expNumber}>3+</span>
                <div className={styles.expText}>
                  <strong>Years Building for the Web</strong>
                  <span>From Hospitality to Full-Stack Engineering</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Pillars */}
          <div className={styles.textCol}>
            <span className={styles.sectionPre}>{"// Who I Am"}</span>
            <h2 className={styles.sectionTitle}>
              From Hospitality to Code: <br />
              <span>Crafting Digital Products with Purpose</span>
            </h2>

            <p className={styles.narrativeText}>
              My path to engineering is unique — I transitioned from a career in <strong>hospitality management</strong> into self-taught <strong>web development</strong>. Managing fast-paced hotel environments instilled an instinct for client empathy, proactive problem-solving, and ruthless attention to detail.
            </p>

            <p className={styles.narrativeText}>
              Today, I channel that exact mindset into building clean, scalable web architectures. Whether freelancing for growing brands or collaborating with engineering teams, I prioritize fast load times, accessible interfaces, and intuitive user experiences.
            </p>

            {/* Core Pillars */}
            <div className={styles.pillarGrid}>
              <div className={styles.pillarCard}>
                <h4>Client & User Empathy</h4>
                <p>Rooted in hospitality — understanding human needs before writing a single line of code.</p>
              </div>

              <div className={styles.pillarCard}>
                <h4>Modern Web Standards</h4>
                <p>Next.js 14 App Router, React Server Components, TypeScript, and clean modular CSS.</p>
              </div>
            </div>

            {/* Actions & Socials */}
            <div className={styles.actionRow}>
              <Link href="/pages/about">
                <button className="btn-primary" style={{ padding: "12px 26px" }}>
                  Read My Full Story &rarr;
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
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jyoti-p-b8a886239/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={18} />
                </a>
                <a
                  href="https://twitter.com/J__Patowary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="Twitter"
                >
                  <FaXTwitter size={18} />
                </a>
                <a
                  href="mailto:jpatowary8@gmail.com"
                  className={styles.socialBtn}
                  aria-label="Email"
                >
                  <IoMail size={18} />
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
