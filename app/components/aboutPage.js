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
          <span className={styles.sectionLabel} style={{ marginBottom: "16px", display: "inline-block" }}>
            About Me
          </span>
          <h1 className={styles.pageTitle}>
            Engineering with empathy and precision.
          </h1>
          <p className={styles.pageSubtitle}>
            Self-taught. Built from real projects, not just tutorials.
          </p>
        </div>
      </section>

      {/* Story Chapter 1 */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyCard}>
            <div className={styles.storyContent}>
              <span className={styles.sectionLabel}>Chapter one</span>
              <h2>I build web apps where the code is clean and the <span>design isn&apos;t an afterthought.</span></h2>
              <p>
                I&apos;m Jyoti. Most of my work is production stuff — real businesses, real users — but I still take on freelance projects when something interesting comes along.
              </p>
              <p>
                Code isn&apos;t the point, honestly. The point is taking a vague idea and making it feel obvious once it&apos;s built. Fast, intuitive, and something the business actually benefits from.
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
              <span className={styles.sectionLabel}>Chapter two — from hospitality to code</span>
              <h2>Nobody&apos;s path is a <span>straight line.</span></h2>
              <p>
                Before software, I worked in hotels — hospitality management, the kind of job where you&apos;re solving five problems at once and none of them can wait.
              </p>
              <p>
                That job taught me patience. Composure. How to notice what a guest needs before they say it out loud.
              </p>
              <p>
                When I switched to development, I brought all of that with me. Hours of tutorials, docs, broken code at 1am, actual projects that forced me to learn faster than any course could. It stuck. And honestly — building something from nothing is still one of the best feelings I know.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Matrix */}
      <section className={styles.techSection}>
        <div className={styles.container}>
          <div className={styles.techTitleArea}>
            <span className={styles.sectionLabel}>Toolbox</span>
            <h2 className={styles.techTitle}>
              Technologies & Frameworks
            </h2>
          </div>

          <div className={styles.techGrid}>
            {techStack.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div key={idx} className={styles.techCard}>
                  <Icon size={38} style={{ color: tech.color }} />
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
