"use client";

import styles from "../styles/hero.module.css";
import Link from "next/link";
import { IoIosArrowRoundForward, IoIosArrowRoundDown } from "react-icons/io";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FiLayout, FiServer, FiCompass } from "react-icons/fi";

function Hero_section() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Top Centered Status Pill */}
        <div className={styles.badgeWrap}>
          <span className="badge-status">
            Available for freelance and full-time work
          </span>
        </div>

        {/* Master Centered Headline */}
        <h1 className={styles.headline}>
          I build web apps that actually work —<br className={styles.desktopBr} />
          fast, clean, and built to last.
        </h1>

        {/* Bio / Value Proposition */}
        <p className={styles.bio}>
          I&apos;m <strong>Jyoti</strong>, a full-stack developer working mostly in Next.js, React, and Node.js. I like taking a messy idea and turning it into something people can actually use. Not just code that runs — code that holds up.
        </p>

        {/* Stats Strip */}
        <div className={styles.statsStrip}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>4 yrs</span>
            <span className={styles.statLabel}>building for the web</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statValue}>10+</span>
            <span className={styles.statLabel}>projects shipped for real clients</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statValue}>Remote</span>
            <span className={styles.statLabel}>available worldwide</span>
          </div>
        </div>

        {/* Action Group */}
        <div className={styles.ctaGroup}>
          <Link href="#works">
            <button className="btn-primary">
              <span>View Selected Work</span>
              <IoIosArrowRoundDown size={20} />
            </button>
          </Link>

          <Link href="/pages/contact">
            <button className="btn-secondary">
              <span>Get in Touch</span>
              <IoIosArrowRoundForward size={20} />
            </button>
          </Link>
        </div>

        {/* Social Links Row */}
        <div className={styles.socialRow}>
          <a
            href="https://github.com/Jyoti-Patowary"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub Profile"
          >
            <FaGithub size={15} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jyoti-p-b8a886239/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn size={15} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://twitter.com/J__Patowary"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Twitter Profile"
          >
            <FaXTwitter size={15} />
            <span>Twitter</span>
          </a>
          <a
            href="mailto:jpatowary8@gmail.com"
            className={styles.socialLink}
            aria-label="Direct Email"
          >
            <IoMail size={15} />
            <span>jpatowary8@gmail.com</span>
          </a>
        </div>

        {/* 3-Column Engineering Capability Strip */}
        <div className={styles.capabilitiesGrid}>
          <div className={styles.capabilityCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconWrap}>
                <FiLayout size={18} />
              </div>
              <span className={styles.cardIndex}>01 / Frontend</span>
            </div>
            <h3 className={styles.cardTitle}>Next.js, React & Modern UI</h3>
            <p className={styles.cardDesc}>
              Architecting fast, accessible interfaces with Next.js App Router, React, Tailwind CSS, and fluid, responsive design systems.
            </p>
            <div className={styles.cardTags}>
              <span>Next.js 14</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>Tailwind</span>
            </div>
          </div>

          <div className={styles.capabilityCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconWrap}>
                <FiServer size={18} />
              </div>
              <span className={styles.cardIndex}>02 / Backend</span>
            </div>
            <h3 className={styles.cardTitle}>APIs, Databases & Logic</h3>
            <p className={styles.cardDesc}>
              Designing resilient RESTful endpoints, performant schemas with MongoDB & MySQL, secure authentication, and custom RMA workflows.
            </p>
            <div className={styles.cardTags}>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className={styles.capabilityCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconWrap}>
                <FiCompass size={18} />
              </div>
              <span className={styles.cardIndex}>03 / Approach</span>
            </div>
            <h3 className={styles.cardTitle}>Commerce & Human Empathy</h3>
            <p className={styles.cardDesc}>
              High-converting Shopify storefronts, custom WordPress plugins, and a hospitality background that delivers calm composure under pressure.
            </p>
            <div className={styles.cardTags}>
              <span>Shopify / Liquid</span>
              <span>WordPress</span>
              <span>UX Empathy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero_section;
