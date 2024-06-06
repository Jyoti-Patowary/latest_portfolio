import Image from "next/image";
import styles from "../styles/process.module.css";
import disc from "../assets/design.png";
import develop from "../assets/circuit.png";
import user from "../assets/plan.png";
import maint from "../assets/rocket.png";
import line from "../assets/line.png";
import Link from "next/link";

const ProcessPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          How I Craft Websites That <span>Work</span>
        </h1>
        <div className={styles.processSteps}>
          <div className={`${styles.processStep} ${styles.left}`}>
            <div className={styles.processContainer}>
            <h2>Discovery & Planning</h2>
            <p>
              We&apos;ll chat about your project goals, target audience, and any
              specific functionalities you envision. I&apos;ll also conduct user
              research (if needed) to understand your users&apos; needs.
            </p>
            </div>
            <div className={styles.icon}>
              <Image src={disc} alt="Discovery & Planning Icon" width={100} height={100} />
            </div>
          </div>
          <Image src={line} alt="Line" width={0} height={0} sizes="100" className={styles.line} />
          <div className={`${styles.processStep} ${styles.right}`}>
          <div className={styles.processContainer}>
            <h2>Design & Prototyping</h2>
            <p>
              Based on our discussions, I&apos;ll create mockups and wireframes
              to visualize the website&apos;s layout and user flow. Your
              feedback is crucial at this stage to ensure we&apos;re on the same
              page.
            </p>
            </div>
            <div className={styles.icon}>
              <Image src={user} alt="Design & Prototyping Icon" width={100} height={100} />
            </div>
          </div>
          <Image src={line} alt="Line" width={0} height={0} sizes="100" className={styles.line} />
          <div className={`${styles.processStep} ${styles.left}`}>
          <div className={styles.processContainer}>
            <h2>Development & Testing</h2>
            <p>
              With your approval on the design, I&apos;ll bring the website to
              life using clean code and best practices. Throughout the process,
              rigorous testing ensures a smooth user experience across different
              devices. We follow Agile development methodologies for efficient
              progress.
            </p>
            </div>
            <div className={styles.icon}>
              <Image src={develop} alt="Development & Testing Icon" width={100} height={100} />
            </div>
          </div>
          <Image src={line} alt="Line" width={0} height={0} sizes="100" className={styles.line} />
          <div className={`${styles.processStep} ${styles.right}`}>
          <div className={styles.processContainer}>
            <h2>Launch & Maintenance</h2>
            <p>
              Once the website is polished, I&apos;ll launch it and provide
              ongoing maintenance to keep it secure and up-to-date. I&apos;m
              also happy to offer support and answer any questions you may have
              after launch.
            </p>
            </div>
            <div className={styles.icon}>
              <Image src={maint} alt="Launch & Maintenance Icon" width={150} height={200}  />
            </div>
          </div>
        </div>
        {/* <Image src={line} alt="Line" width={100} height={10} className={styles.line} /> */}
        <div className={styles.cta}>
          <Link href="/contact" passHref>
            <button className={styles.button}>
              Let&apos;s Discuss Your Project
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
