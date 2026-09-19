"use client";

import { useEffect, useState } from "react";
import styles from "../styles/skills.module.css";
import Image from "next/image";
import { fallbackSkills } from "../data/portfolioData";

const categories = ["All", "Frontend", "Backend", "Database", "CMS & Commerce", "Tools & DevOps"];

const Skills = () => {
  const [skillsData, setSkillsData] = useState(fallbackSkills);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/skills");
        if (res.ok) {
          const data = await res.json();
          if (data && Array.isArray(data.result) && data.result.length > 0) {
            setSkillsData(data.result);
          }
        }
      } catch (error) {
        console.warn("Using fallback skills data:", error);
      }
    }
    fetchData();
  }, []);

  const filteredSkills = activeCategory === "All"
    ? skillsData
    : skillsData.filter((skill) => {
        if (!skill.category) return true;
        return skill.category.toLowerCase().includes(activeCategory.toLowerCase().split(" ")[0]);
      });

  return (
    <section id="skills" className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.sectionPre}>{"// Capabilities"}</span>
          <h2 className={styles.skillTitle}>
            Tools of My <span>Trade</span>
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className={styles.filterTabs}>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`${styles.tabBtn} ${activeCategory === cat ? styles.tabBtnActive : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className={styles.skillsGrid}>
          {filteredSkills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.cardTop}>
                <div className={styles.logoWrapper}>
                  <Image
                    src={skill.image || "/skills-images/nextjs.svg"}
                    alt={`${skill.skill || "Skill"} logo`}
                    className={styles.logoImg}
                    width={36}
                    height={36}
                    loading="lazy"
                  />
                </div>
                {skill.level && (
                  <span className={styles.levelBadge}>{skill.level}</span>
                )}
              </div>

              <div>
                <h3 className={styles.skillName}>{skill.skill}</h3>
                <p className={styles.skillDesc}>{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
