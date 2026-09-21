"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "../styles/work.module.css";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { fallbackProjects } from "../data/portfolioData";

function Work() {
  const [portfolioData, setPortfolioData] = useState(fallbackProjects);
  const pathname = usePathname();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/portfolio_details");
        if (res.ok) {
          const data = await res.json();
          if (data && Array.isArray(data.result) && data.result.length > 0) {
            setPortfolioData(data.result);
          }
        }
      } catch (error) {
        console.warn("Using fallback projects data:", error);
      }
    }
    fetchData();
  }, []);

  const isWorkPage = pathname === "/pages/workPage";
  const displayedProjects = isWorkPage ? portfolioData : portfolioData.slice(0, 4);

  return (
    <div>
      {/* Header if on dedicated Work Page */}
      {isWorkPage && (
        <div className={styles.workPageHeader}>
          <div className={styles.container}>
            <span className={styles.sectionLabel}>Portfolio & Case Studies</span>
            <h1 className={styles.pageTitle}>Selected Works</h1>
            <p className={styles.pageSubtitle}>
              A curated selection of client platforms, custom internal tools, and full-stack web applications.
            </p>
          </div>
        </div>
      )}

      {/* Main Works Section */}
      <section id="works" className={styles.worksSection}>
        <div className={styles.container}>
          {!isWorkPage && (
            <div className={styles.worksTitleArea}>
              <span className={styles.sectionLabel}>Selected Work</span>
              <h2 className={styles.worksHeading}>Projects I&apos;ve built and shipped.</h2>
              <p className={styles.worksSubtitle}>
                Production web applications, custom management dashboards, and modern e-commerce storefronts.
              </p>
            </div>
          )}

          <div className={styles.projectsGrid}>
            {displayedProjects.map((item) => {
              const validFinalImg = Array.isArray(item.final_img)
                ? item.final_img.find((img) => typeof img === "string" && img.trim().length > 0)
                : null;
              const imageSrc =
                (item.site_image && item.site_image.trim()) ||
                validFinalImg ||
                "/troyagency.png";
              const category = item.category || (item.estimate && item.estimate[0]?.category) || "Web Development";
              const isMobile =
                category.toLowerCase().includes("mobile") ||
                category.toLowerCase().includes("app") ||
                imageSrc.includes("/szn/") ||
                imageSrc.includes("portrait");
              const tags =
                (Array.isArray(item.tags) && item.tags.length > 0
                  ? item.tags
                  : Array.isArray(item.tech_stack) && item.tech_stack.length > 0
                  ? item.tech_stack
                  : null) || ["Next.js", "React", "Node.js", "Responsive"];

              return (
                <div key={item._id} className={styles.projectCard}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={imageSrc}
                      width={600}
                      height={340}
                      className={isMobile ? styles.projectImageContain : styles.projectImage}
                      alt={item.site_name || item.title}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    />
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.cardTop}>
                      <div className={styles.cardMetaRow}>
                        <span className={styles.categoryName}>{category}</span>
                      </div>

                      <h3 className={styles.projectTitle}>{item.title}</h3>
                      <p className={styles.projectIntro}>
                        {item.site_intro || item.description || "Engineered with precision for optimal user experience, fast load speeds, and business growth."}
                      </p>

                      <div className={styles.tagsRow}>
                        {tags.map((tag, tIdx) => (
                          <span key={tIdx} className={styles.tagPill}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.cardFooter}>
                      <div className={styles.disabledDetailsBtn} title="Case study coming soon">
                        <span className={styles.comingSoonDot}></span>
                        <span>Case Study Coming Soon</span>
                      </div>

                      {item.site_link && (
                        <a
                          href={item.site_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.externalLink}
                          aria-label={`Visit ${item.site_name} live site`}
                        >
                          <span>Live Demo</span>
                          <FiExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {!isWorkPage && (
            <div className={styles.ctaArea}>
              <Link href="/pages/workPage">
                <button className="btn-secondary">
                  <span>Explore All Projects ({portfolioData.length})</span>
                  <IoIosArrowRoundForward size={20} />
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Work;
