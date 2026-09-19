"use client";

import styles from "../styles/hero.module.css";
import Image from "next/image";
import Link from "next/link";
import Deep from "../assets/deep.webp";
import { IoIosArrowRoundForward, IoIosArrowRoundDown } from "react-icons/io";

function Hero_section() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGlow}></div>
      <div className={styles.container}>
        {/* Left Column: Headline & Bio */}
        <div className={styles.leftCol}>
          <div className={styles.badgeWrap}>
            <span className="badge-status">
              Available for Freelance & Full-Time Roles
            </span>
          </div>

          <h1 className={styles.headline}>
            Architecting <br />
            <span className={styles.highlightGradient}>High-Impact</span> Web Apps & <br />
            <span className={styles.highlightCyan}>Bold</span> Digital Products.
          </h1>

          <p className={styles.bio}>
            Hi, I&apos;m <strong>Jyoti Patowary</strong> — a Full-Stack Web Developer blending engineering rigor with striking modern aesthetics. Specializing in <strong>Next.js, React, Node.js</strong>, and high-performance digital platforms that turn ideas into scalable realities.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="#works">
              <button className="btn-primary">
                <span>Explore Featured Work</span>
                <IoIosArrowRoundDown size={22} />
              </button>
            </Link>

            <Link href="/pages/contact">
              <button className="btn-secondary">
                <span>Let&apos;s Connect</span>
                <IoIosArrowRoundForward size={22} />
              </button>
            </Link>
          </div>

          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>3+</span>
              <span className={styles.statLabel}>Years Development</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Projects Delivered</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Profile & Terminal Card */}
        <div className={styles.rightCol}>
          <div className={styles.profileCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={Deep}
                alt="Jyoti Patowary — Full Stack Developer"
                className={styles.profileImg}
                priority
                sizes="(max-width: 768px) 100vw, 440px"
              />
              <div className={styles.floatingTag}>
                <span style={{ color: "var(--accent-primary)" }}>●</span>
                <span>Full-Stack Engineer</span>
              </div>
            </div>

            <div className={styles.terminalSnippet}>
              <div><span className={styles.codeKey}>const</span> developer = &#123;</div>
              <div style={{ paddingLeft: "16px" }}>name: <span className={styles.codeVal}>&apos;Jyoti Patowary&apos;</span>,</div>
              <div style={{ paddingLeft: "16px" }}>stack: [<span className={styles.codeVal}>&apos;Next.js&apos;</span>, <span className={styles.codeVal}>&apos;React&apos;</span>, <span className={styles.codeVal}>&apos;Node.js&apos;</span>],</div>
              <div style={{ paddingLeft: "16px" }}>mindset: <span className={styles.codeVal}>&apos;Relentless Problem Solver&apos;</span>,</div>
              <div style={{ paddingLeft: "16px" }}>openToWork: <span className={styles.codeBool}>true</span></div>
              <div>&#125;;</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero_section;
