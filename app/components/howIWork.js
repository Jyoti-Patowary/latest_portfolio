import styles from "../styles/howIWork.module.css";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const steps = [
  {
    index: "01",
    title: "Discovery first.",
    desc: "I want to understand the goal before I write a line of code.",
  },
  {
    index: "02",
    title: "Then design.",
    desc: "Wireframes, prototypes, a clear picture of how someone moves through the product.",
  },
  {
    index: "03",
    title: "Then build.",
    desc: "Clean, typed, tested code — not just something that works on my machine.",
  },
  {
    index: "04",
    title: "Then launch.",
    desc: "Speed checks, cross-device testing, SEO basics, and I stick around after it ships.",
  },
];

function HowIWork() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.sectionLabel}>How I work</span>
          <h2 className={styles.title}>No guesswork. No handoffs into the void.</h2>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.index} className={styles.stepCard}>
              <span className={styles.stepIndex}>{step.index}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaArea}>
          <Link href="/pages/contact">
            <button className="btn-primary">
              <span>Let&apos;s talk about your project</span>
              <IoIosArrowRoundForward size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HowIWork;

