"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import styles from "../styles/portfolioDetails.module.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import {
  FiExternalLink,
  FiCheckCircle,
  FiStar,
  FiZap,
  FiShield,
  FiArrowRight,
  FiCompass,
  FiLayers,
  FiAward,
} from "react-icons/fi";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { fallbackProjects } from "../data/portfolioData";

// Helper to extract the tech stack dynamically from MongoDB database
function getTechStack(project) {
  if (!project) return [];

  // 1. Direct tech stack or tags field from MongoDB
  const rawStack =
    project.tags ||
    project.tech_stack ||
    project.techStack ||
    project.technologies ||
    project.technology ||
    project.stack ||
    project.tools;

  if (Array.isArray(rawStack) && rawStack.length > 0) {
    return rawStack
      .map((item) => {
        if (typeof item === "string") return item.trim();
        if (item && typeof item === "object") {
          return item.name || item.title || item.label || item.tech || "";
        }
        return String(item);
      })
      .filter(Boolean);
  }

  // 2. Comma-separated string in database
  if (typeof rawStack === "string" && rawStack.trim().length > 0) {
    return rawStack
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }

  // 3. Fallback: Parse categories from estimate in database
  const category =
    project.category ||
    (project.estimate && project.estimate[0]?.category);

  if (category && typeof category === "string" && category.trim().length > 0) {
    return category
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }

  return [];
}

// Helper to check if a project or screen represents a mobile app mockup
function isMobileProject(project, imageSrc = "") {
  if (!project) return false;
  const cat = (project.category || (project.estimate && project.estimate[0]?.category) || "").toLowerCase();
  const title = (project.site_name || project.title || "").toLowerCase();
  const src = (imageSrc || project.site_image || "").toLowerCase();

  const isMobileCat =
    cat.includes("mobile") ||
    cat.includes("ios") ||
    cat.includes("android") ||
    cat.includes("app development") ||
    cat.includes("react native");
  const isMobileSrc =
    src.includes("/szn/") ||
    src.includes("portrait") ||
    src.includes("mobile") ||
    src.includes("phone");
  const isMobileTitle =
    title.includes("styling app") ||
    title.includes("mobile app") ||
    title.includes("yourszn");

  return Boolean(isMobileCat || isMobileSrc || isMobileTitle);
}

// Helper to extract all valid non-empty mockup images from MongoDB
function getValidMockupImages(project) {
  if (!project) return [];
  const candidates = [];

  // 1. Primary site_image
  if (project.site_image && typeof project.site_image === "string" && project.site_image.trim()) {
    candidates.push(project.site_image.trim());
  }

  // 2. Final images array or string
  if (Array.isArray(project.final_img)) {
    project.final_img.forEach((img) => {
      if (typeof img === "string" && img.trim()) {
        candidates.push(img.trim());
      }
    });
  } else if (typeof project.final_img === "string" && project.final_img.trim()) {
    candidates.push(project.final_img.trim());
  }

  // 3. Alternative mockups / images / gallery / screens arrays if present
  const altArrays = [project.mockups, project.images, project.gallery, project.screenshots, project.screens];
  altArrays.forEach((arr) => {
    if (Array.isArray(arr)) {
      arr.forEach((img) => {
        if (typeof img === "string" && img.trim()) {
          candidates.push(img.trim());
        }
      });
    }
  });

  // Return unique list preserving order
  return Array.from(new Set(candidates));
}

// Helper to generate human-readable screen captions from image paths
function formatScreenCaption(imgSrc, index) {
  if (!imgSrc || typeof imgSrc !== "string") return `Screen Showcase ${index + 1}`;

  const filename = imgSrc.split("/").pop().replace(/\.[^/.]+$/, "");
  const clean = filename.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
  const lower = clean.toLowerCase();

  if (lower.includes("featured look")) return "Featured Look Screen";
  if (lower.includes("looks detail")) return "Looks Detail View";
  if (lower.includes("weekly add-ons") || lower.includes("weekly add ons")) return "Weekly Add-Ons Screen";
  if (lower.includes("home")) return "Home & Discover Screen";
  if (lower.includes("main")) return "Main Dashboard Screen";

  if (clean.length > 2 && !clean.startsWith("blob")) {
    return clean
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }

  return `Screen Showcase ${index + 1}`;
}

function PortfolioDetailsContent() {
  const params = useParams();
  const searchParams = useSearchParams();

  // Support both dynamic route (/pages/portfolio-details/[id]) and query (/pages/portfolio-details?id=...)
  const routeId = params && params.id ? String(params.id) : null;
  const queryId = searchParams ? searchParams.get("id") : null;
  const urlId = routeId || queryId;

  const [allProjects, setAllProjects] = useState(fallbackProjects);
  const [activeId, setActiveId] = useState(urlId || fallbackProjects[0]._id);

  // Sync state when URL parameter or query changes
  useEffect(() => {
    if (urlId) {
      setActiveId(urlId);
    }
  }, [urlId]);

  // Fetch from database API route
  useEffect(() => {
    let isMounted = true;
    async function fetchProjects() {
      try {
        const res = await fetch("/api/portfolio_details");
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data && Array.isArray(data.result) && data.result.length > 0) {
            setAllProjects(data.result);
            // If urlId is provided, sync activeId if matching item exists in database
            if (urlId) {
              const matched = data.result.find((p) => String(p._id) === String(urlId));
              if (matched) {
                setActiveId(matched._id);
              }
            }
          }
        }
      } catch (err) {
        console.warn("Using fallback portfolio data:", err);
      }
    }
    fetchProjects();
    return () => {
      isMounted = false;
    };
  }, [urlId]);

  // Resolve current project safely
  const currentProject =
    allProjects.find((p) => String(p._id) === String(activeId)) ||
    allProjects[0] ||
    fallbackProjects[0];

  // Pagination navigation
  const currentIndex = allProjects.findIndex((p) => String(p._id) === String(currentProject._id));
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const prevIndex = safeIndex > 0 ? safeIndex - 1 : allProjects.length - 1;
  const nextIndex = safeIndex < allProjects.length - 1 ? safeIndex + 1 : 0;
  const prevProject = allProjects[prevIndex];
  const nextProject = allProjects[nextIndex];

  // Extract all non-empty mockup images from MongoDB
  const allMockupImages = getValidMockupImages(currentProject);

  const heroImage =
    (currentProject.site_image && currentProject.site_image.trim()) ||
    allMockupImages[0] ||
    "/pocketbook_image.webp";

  const isMobile = isMobileProject(currentProject, heroImage);

  const category =
    currentProject.category ||
    (currentProject.estimate && currentProject.estimate[0]?.category) ||
    "Custom Software Engineering";

  const estItem = currentProject.estimate && currentProject.estimate[0];
  const rawDate = estItem?.date ? estItem.date.trim() : "";
  const rawEst = estItem?.estimation ? estItem.estimation.trim() : "";
  const timelineYear = rawDate || "2024";
  const timelineDuration = rawEst || "Delivered";
  const timelineDisplay =
    rawDate && rawEst ? `${rawDate} (${rawEst})` : rawDate || rawEst || "Production Deployed";

  const tags = getTechStack(currentProject);

  const hasLiveLink = Boolean(currentProject.site_link && currentProject.site_link.trim().length > 0);
  const hasGithubLink = Boolean(currentProject.github_link && currentProject.github_link.trim().length > 0);

  const mockupUrl = hasLiveLink
    ? currentProject.site_link.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : `${(currentProject.site_name || currentProject.title || "project")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "-")
        .replace(/-+/g, "-")
        .slice(0, 26)}.internal`;

  const metrics =
    currentProject.metrics && currentProject.metrics.length > 0
      ? currentProject.metrics
      : [
          { label: "Intake Efficiency", value: "3x Faster", desc: "Automated workflow vs manual emails" },
          { label: "Data Accuracy", value: "100%", desc: "Validated order and return information" },
          { label: "Admin Workflow", value: "Centralized", desc: "Dedicated management dashboard" },
          { label: "Architecture", value: "Custom", desc: "Tailored specifically for the business" },
        ];

  return (
    <div className={styles.detailPageWrapper}>
      <div className={styles.container}>
        {/* Top Breadcrumb & Switcher Row */}
        <div className={styles.topNavRow}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span>/</span>
            <Link href="/pages/workPage" className={styles.breadcrumbLink}>
              Works
            </Link>
            <span>/</span>
            <span className={styles.breadcrumbCurrent}>{currentProject.site_name || currentProject.title}</span>
          </nav>

          {/* Quick Case Study Switcher */}
          <div className={styles.projectSwitcher}>
            {allProjects.map((proj) => (
              <button
                key={proj._id}
                className={`${styles.switchBtn} ${
                  String(activeId) === String(proj._id) ? styles.switchBtnActive : ""
                }`}
                onClick={() => setActiveId(proj._id)}
              >
                {proj.site_name || proj.title}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.categoryBadge}>{category}</span>
            </div>

            <h1 className={styles.heroTitle}>
              {currentProject.title || currentProject.site_name}
            </h1>

            <p className={styles.heroTagline}>
              {currentProject.site_intro || currentProject.tagline || currentProject.description}
            </p>

            <div className={styles.actionRow}>
              {hasLiveLink && (
                <a
                  href={currentProject.site_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Visit Live Website</span>
                  <FiExternalLink size={16} />
                </a>
              )}

              {hasGithubLink && (
                <a
                  href={currentProject.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>GitHub Repository</span>
                  <FiExternalLink size={16} />
                </a>
              )}

              <Link href="/pages/workPage">
                <button className="btn-secondary">
                  <span>Browse All Works</span>
                  <FiArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>

          {/* Device Mockup Frame (Mobile Phone or Desktop Browser) */}
          {isMobile ? (
            <div className={styles.mobileDeviceMockupFrame}>
              <Image
                src={heroImage}
                alt={`${currentProject.site_name || currentProject.title} Mobile App Mockup`}
                width={440}
                height={880}
                className={styles.mobileDeviceImage}
                priority
                sizes="(max-width: 640px) 320px, 440px"
              />
            </div>
          ) : (
            <div className={styles.mockupFrame}>
              <div className={styles.mockupHeader}>
                <span className={styles.urlPill}>https://{mockupUrl}</span>
              </div>

              <Image
                src={heroImage}
                alt={`${currentProject.site_name || currentProject.title} Mockup Showcase`}
                width={1080}
                height={620}
                className={styles.mockupImage}
                priority
                sizes="(max-width: 768px) 100vw, 1080px"
              />
            </div>
          )}
        </section>

        {/* Specifications & Tech Meta Bar */}
        <div className={styles.specsContainer}>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Client / Partner</span>
            <span className={styles.specValue}>{currentProject.site_name || currentProject.title}</span>
          </div>

          <div className={styles.specItem}>
            <span className={styles.specLabel}>Timeline & Scope</span>
            <span className={styles.specValue}>{timelineDisplay}</span>
          </div>

          <div className={styles.specItem}>
            <span className={styles.specLabel}>My Role</span>
            <span className={styles.specValue}>Full-Stack Engineer & UI/UX</span>
          </div>

          <div className={styles.specItem}>
            <span className={styles.specLabel}>Core Technologies</span>
            <div className={styles.techTagsRow}>
              {tags && tags.length > 0 ? (
                tags.map((t, idx) => (
                  <span key={idx} className={styles.techPill}>
                    {t}
                  </span>
                ))
              ) : (
                <span className={styles.techPill}>Full-Stack Architecture</span>
              )}
            </div>
          </div>
        </div>

        {/* Dedicated Project Overview & Technical Scope Section */}
        {currentProject.description &&
          currentProject.description.trim() !== (currentProject.site_intro || "").trim() && (
            <section className={styles.descriptionSection}>
              <div className={styles.descriptionCard}>
                <div className={styles.descriptionHeader}>
                  <FiLayers size={24} className={styles.descriptionIcon} />
                  <h2 className={styles.descriptionTitle}>Project Overview & Technical Scope</h2>
                </div>
                <p className={styles.descriptionText}>{currentProject.description}</p>
              </div>
            </section>
          )}

        {/* Dedicated Planning & Strategy Section */}
        {(currentProject.planning_title || currentProject.planning_text) && (
          <section className={styles.planningSection}>
            <div className={styles.planningCard}>
              <div className={styles.planningHeader}>
                <FiCompass size={28} className={styles.planningIcon} />
                <h2 className={styles.planningTitle}>
                  {currentProject.planning_title || "Our Planning & Architecture Strategy"}
                </h2>
              </div>
              <p className={styles.planningText}>{currentProject.planning_text}</p>
            </div>
          </section>
        )}

        {/* Challenge vs Architectural Solution Comparison (if provided) */}
        {(currentProject.challenge || currentProject.solution) && (
          <div className={styles.challengeSolutionGrid}>
            {currentProject.challenge && (
              <div className={styles.narrativeCard}>
                <h3>
                  <FiShield color="var(--accent-primary)" size={24} />
                  <span>The Challenge</span>
                </h3>
                <p>{currentProject.challenge}</p>
              </div>
            )}

            {currentProject.solution && (
              <div className={styles.narrativeCard}>
                <h3>
                  <FiZap color="#38bdf8" size={24} />
                  <span>The Architectural Solution</span>
                </h3>
                <p>{currentProject.solution}</p>
              </div>
            )}
          </div>
        )}

        {/* Strategic Deliverables & Client Care */}
        {currentProject.client_care && currentProject.client_care.length > 0 && (
          <section className={styles.deliverablesSection}>
            <h2 className={styles.sectionHeading}>Strategic Deliverables & Architecture</h2>
            <div className={styles.careGrid}>
              {currentProject.client_care.map((care, idx) => {
                const defaultPillars = [
                  "Workflow & Process Discovery",
                  "Centralized Dashboard System",
                  "Purpose-Built Custom Architecture",
                  "Continuous Quality & Support",
                ];
                const careTitle = care.title || defaultPillars[idx % defaultPillars.length];

                return (
                  <div key={idx} className={styles.careCard}>
                    <div className={styles.careHeader}>
                      <div className={styles.careIconWrapper}>
                        <Image
                          src={care.care_img || "/puzzle_7406991.png"}
                          height={24}
                          width={24}
                          alt="Deliverable icon"
                          loading="lazy"
                        />
                      </div>
                      <h4 className={styles.careTitle}>{careTitle}</h4>
                    </div>
                    <p>{care.care_text}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* What We Engineered & Deployed */}
        {(currentProject.what_we_did_list ||
          currentProject.what_we_did_text ||
          currentProject.what_we_did_title) && (
          <section className={styles.deliverablesSection}>
            <div className={styles.checklistCard}>
              <h2 className={styles.sectionHeading} style={{ marginBottom: "16px" }}>
                What We Engineered & Deployed
              </h2>

              {currentProject.what_we_did_title && (
                <div className={styles.philosophyQuoteCard}>
                  <FiLayers size={22} className={styles.philosophyQuoteIcon} />
                  <div className={styles.philosophyQuoteText}>
                    &ldquo;{currentProject.what_we_did_title}&rdquo;
                  </div>
                </div>
              )}

              {currentProject.what_we_did_text && (
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "15px",
                    lineHeight: "1.7",
                    marginBottom: "24px",
                  }}
                >
                  {currentProject.what_we_did_text}
                </p>
              )}

              {currentProject.what_we_did_list && currentProject.what_we_did_list.length > 0 && (
                <ul className={styles.checklist}>
                  {currentProject.what_we_did_list.map((item, idx) => (
                    <li key={idx} className={styles.checkItem}>
                      <FiCheckCircle size={18} className={styles.checkIcon} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        )}

        {/* Final Results & All Mockups Showcase */}
        {(currentProject.final_title ||
          currentProject.final_text ||
          allMockupImages.length > 0) && (
          <section className={styles.finalResultsSection}>
            <div className={styles.finalResultsCard}>
              <div className={styles.finalResultsHeader}>
                <FiAward size={28} style={{ color: "#10b981", flexShrink: 0 }} />
                <h2 className={styles.finalResultsTitle}>
                  {currentProject.final_title ||
                    (isMobile ? "App Screens & Visual Showcase" : "Final Results & Mockup Showcase")}
                </h2>
              </div>

              {currentProject.final_text && (
                <p className={styles.finalResultsText}>{currentProject.final_text}</p>
              )}

              {allMockupImages.length > 0 &&
                (isMobile ? (
                  <div className={styles.mobileAppScreensGrid}>
                    {allMockupImages.map((imgSrc, idx) => (
                      <div key={idx} className={styles.mobileAppCard}>
                        <Image
                          src={imgSrc}
                          alt={`${currentProject.site_name || currentProject.title} Screen ${idx + 1}`}
                          width={380}
                          height={760}
                          className={styles.mobileAppCardImage}
                          loading="lazy"
                          sizes="(max-width: 640px) 300px, 380px"
                        />
                        <span className={styles.mobileAppCardCaption}>
                          {formatScreenCaption(imgSrc, idx)}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={styles.finalGalleryGrid}>
                    {allMockupImages.map((imgSrc, idx) => (
                      <div key={idx} className={styles.finalImageFrame}>
                        <div className={styles.mockupHeader}>
                          <span className={styles.urlPill}>
                            {formatScreenCaption(imgSrc, idx)}
                          </span>
                        </div>
                        <Image
                          src={imgSrc}
                          alt={`${currentProject.site_name || currentProject.title} Showcase ${idx + 1}`}
                          width={1080}
                          height={620}
                          className={styles.finalImage}
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 1080px"
                        />
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </section>
        )}

        {/* Client Testimonial (if provided) */}
        {currentProject.testimonial && currentProject.testimonial.quote && (
          <div className={styles.testimonialCard}>
            <div className={styles.starsRow}>
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} size={20} fill="#fbbf24" />
              ))}
            </div>
            <p className={styles.quoteText}>&ldquo;{currentProject.testimonial.quote}&rdquo;</p>
            <div className={styles.authorMeta}>
              <span className={styles.authorName}>{currentProject.testimonial.author}</span>
              <span className={styles.authorRole}>{currentProject.testimonial.role}</span>
            </div>
          </div>
        )}

        {/* Previous & Next Project Navigation Cards */}
        <div className={styles.navPagination}>
          <button
            onClick={() => setActiveId(prevProject._id)}
            className={styles.navCard}
            style={{
              textAlign: "left",
              cursor: "pointer",
              background: "none",
              border: "1px solid var(--border-subtle)",
              width: "100%",
            }}
          >
            <IoIosArrowRoundBack size={24} color="var(--accent-primary)" />
            <div>
              <span className={styles.navLabel}>← Previous Project</span>
              <div className={styles.navTitle}>{prevProject.site_name || prevProject.title}</div>
            </div>
          </button>

          <button
            onClick={() => setActiveId(nextProject._id)}
            className={`${styles.navCard} ${styles.navCardNext}`}
            style={{
              textAlign: "right",
              cursor: "pointer",
              background: "none",
              border: "1px solid var(--border-subtle)",
              width: "100%",
            }}
          >
            <div>
              <span className={styles.navLabel}>Next Project →</span>
              <div className={styles.navTitle}>{nextProject.site_name || nextProject.title}</div>
            </div>
            <IoIosArrowRoundForward size={24} color="var(--accent-primary)" />
          </button>
        </div>

        {/* Bottom Consultation Banner */}
        <div className={styles.bottomCtaBanner}>
          <span className={styles.sectionLabel}>Next Steps</span>
          <h2 className={styles.ctaTitle}>Have questions about this project?</h2>
          <p className={styles.ctaSubtitle}>
            I&apos;m happy to discuss the technical decisions, architecture, or how we can collaborate on your next build.
          </p>
          <Link href="/pages/contact">
            <button className="btn-primary" style={{ padding: "12px 28px" }}>
              <span>Start a Conversation</span>
              <IoIosArrowRoundForward size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function PortfolioDetailsWrapper() {
  return (
    <Suspense
      fallback={
        <div className={styles.loadingScreen}>
          <div className={styles.spinner}></div>
        </div>
      }
    >
      <PortfolioDetailsContent />
    </Suspense>
  );
}

export default PortfolioDetailsWrapper;
