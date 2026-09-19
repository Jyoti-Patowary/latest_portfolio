"use client";

import styles from "../styles/stacks.module.css";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiTailwindcss, 
  SiShopify, 
  SiWordpress, 
  SiGit,
  SiHtml5,
  SiCss3
} from "react-icons/si";

const techList = [
  { name: "Next.js 14", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Shopify / Liquid", icon: SiShopify },
  { name: "WordPress / WooCommerce", icon: SiWordpress },
  { name: "Git & GitHub", icon: SiGit },
  { name: "HTML5 & CSS3", icon: SiHtml5 },
];

export const Stacks = () => {
  return (
    <div className={styles.stacksWrapper}>
      <div className={styles.marqueeTrack}>
        {/* First repetition */}
        <div className={styles.marqueeGroup}>
          {techList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className={styles.techPill}>
                <Icon size={18} className={styles.techIcon} />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>

        {/* Second repetition for smooth infinite marquee */}
        <div className={styles.marqueeGroup}>
          {techList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`dup-${idx}`} className={styles.techPill}>
                <Icon size={18} className={styles.techIcon} />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stacks;
