"use client";

import Image from "next/image";
import styles from "../styles/about.module.css";
import Deep from "../assets/deep.webp";
import Code from "../assets/me2.webp";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiRemix, 
  SiExpress, 
  SiNodedotjs, 
  SiMongodb, 
  SiMysql, 
  SiTailwindcss, 
  SiMui, 
  SiShopify, 
  SiWordpress, 
  SiWoocommerce, 
  SiGit 
} from "react-icons/si";
import Work from "../components/work";

const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "Node.js", icon: SiNodedotjs, color: "#68a063" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1" },
  { name: "Remix", icon: SiRemix, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Material-UI", icon: SiMui, color: "#007fff" },
  { name: "Shopify & Liquid", icon: SiShopify, color: "#96bf48" },
  { name: "WordPress", icon: SiWordpress, color: "#21759b" },
  { name: "WooCommerce", icon: SiWoocommerce, color: "#96588a" },
  { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS3", icon: SiCss3, color: "#1572b6" },
  { name: "Git & GitHub", icon: SiGit, color: "#f05032" },
];

function AboutPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Header Banner */}
      <section className={styles.aboutPageHero}>
        <div className={styles.container}>
          <span className="badge" style={{ marginBottom: "16px" }}>
            The Developer Behind the Code
          </span>
          <h1 className={styles.pageTitle}>
            Engineering with <span className="glow-text">Empathy & Precision</span>
          </h1>
          <p className={styles.pageSubtitle}>
            A self-taught full-stack developer turning abstract concepts into high-performing, interactive digital realities.
          </p>
        </div>
      </section>

      {/* Story Chapter 1 */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyCard}>
            <div className={styles.storyContent}>
              <span className={styles.sectionPre}>{"// Chapter 01"}</span>
              <h2>The Techie with a <span>Creative Twist</span></h2>
              <p>
                Hi there! I&apos;m Jyoti Patowary. I build web applications where clean code meets modern aesthetics. While I enjoy solving complex architectural challenges in production environments, I frequently collaborate with clients and startups on bespoke freelance projects.
              </p>
              <p>
                For me, web engineering is never just about typing syntax. It is about distilling ambitious ideas into digital experiences that are intuitive, fast, and enjoyable for users while delivering tangible results for businesses.
              </p>
            </div>
            <div className={styles.storyImageWrapper}>
              <Image
                src={Deep}
                alt="Jyoti Patowary"
                className={styles.storyImg}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>

          {/* Story Chapter 2 */}
          <div className={`${styles.storyCard} ${styles.storyCardReverse}`}>
            <div className={styles.storyImageWrapper}>
              <Image
                src={Code}
                alt="Coding Setup"
                className={styles.storyImg}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div className={styles.storyContent}>
              <span className={styles.sectionPre}>{"// Chapter 02"}</span>
              <h2>From Hospitality to Code: <span>My Journey</span></h2>
              <p>
                Life rarely moves in a straight line. Before entering software engineering, I spent years working in hospitality management as a hotelier. That experience proved to be my secret weapon: it taught me deep human empathy, composure under high pressure, and the art of anticipating user needs.
              </p>
              <p>
                When I committed to becoming a self-taught software developer, I brought that same work ethic with me. Countless hours dedicated to deep-dive tutorials, documentation, and building real-world projects forged my technical foundation. Transforming ideas into working software remains one of the most rewarding pursuits in my life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Matrix */}
      <section className={styles.techSection}>
        <div className={styles.container}>
          <div className={styles.techTitleArea}>
            <span className={styles.sectionPre}>{"// Core Competencies"}</span>
            <h2 className={styles.techTitle}>
              My Tech Stack: <span>Tools of the Trade</span>
            </h2>
          </div>

          <div className={styles.techGrid}>
            {techStack.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div key={idx} className={styles.techCard}>
                  <Icon size={44} style={{ color: tech.color }} />
                  <span className={styles.techName}>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <Work />
    </div>
  );
}

export default AboutPage;
