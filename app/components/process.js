"use client";

import styles from "../styles/process.module.css";
import Link from "next/link";
import { FaCompass, FaDraftingCompass, FaLaptopCode, FaRocket } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    desc: "Aligning on core business goals, target audience personas, technical requirements, and mapping out the optimal system architecture.",
    icon: FaCompass,
    iconColor: "#ff3358",
  },
  {
    number: "02",
    title: "UI/UX & Prototyping",
    desc: "Crafting bold, intuitive interfaces with responsive wireframes and interactive component prototypes that guarantee frictionless user flows.",
    icon: FaDraftingCompass,
    iconColor: "#6366f1",
  },
  {
    number: "03",
    title: "Full-Stack Development",
    desc: "Writing clean, type-safe, modular code using modern standards (Next.js 14, React, Node.js). Rigorous unit and integration testing throughout.",
    icon: FaLaptopCode,
    iconColor: "#06b6d4",
  },
  {
    number: "04",
    title: "Testing, Launch & Scale",
    desc: "Speed optimization, cross-device QA, technical SEO, and deploying to global CDNs with ongoing monitoring and support.",
    icon: FaRocket,
    iconColor: "#10b981",
  },
];

const ProcessPage = () => {
  return (
    <section id="process" className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.sectionPre}>{"// How I Work"}</span>
          <h2 className={styles.title}>
            Engineering Websites That <span>Perform</span>
          </h2>
        </div>

        <div className={styles.stepsGrid}>
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className={styles.stepCard}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div className={styles.stepIconWrap}>
                    <Icon size={24} style={{ color: step.iconColor }} />
                  </div>
                  <span className={styles.stepNumber}>{step.number}</span>
                </div>

                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.ctaArea}>
          <Link href="/pages/contact">
            <button className="btn-primary">
              <span>Let&apos;s Discuss Your Project</span>
              <IoIosArrowRoundForward size={22} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessPage;
