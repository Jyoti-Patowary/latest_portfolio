"use client";

import Footer from "@/app/components/footer";
import Nav from "@/app/components/nav";
import styles from "../../styles/blogpage.module.css";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiExternalLink, FiCheckCircle } from "react-icons/fi";
import Image from "next/image";
import { fallbackBlogs } from "@/app/data/portfolioData";

const categories = [
  "All Topics",
  "AI & Engineering",
  "Next.js & React",
  "Version Control",
  "Backend & Database",
  "Developer Journey",
];

const BlogPage = () => {
  const [blogs, setBlogs] = useState(fallbackBlogs);
  const [activeCategory, setActiveCategory] = useState("All Topics");
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        if (response.ok) {
          const data = await response.json();
          if (data && Array.isArray(data.result) && data.result.length > 0) {
            // Merge database blogs with rich fallback blogs so we have a full library
            const merged = [...data.result];
            fallbackBlogs.forEach((fb) => {
              if (!merged.some((m) => m.title === fb.title)) {
                merged.push(fb);
              }
            });
            setBlogs(merged);
          }
        }
      } catch (error) {
        console.warn("Using fallback blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  const featuredArticle = blogs.find((b) => b.featured) || blogs[0];

  const filteredArticles = blogs.filter((blog) => {
    if (activeCategory === "All Topics") return true;
    const cat = (blog.category || blog.tag || "").toLowerCase();
    const query = activeCategory.toLowerCase().split(" ")[0];
    return cat.includes(query);
  });

  return (
    <div className={styles.insightsPageWrapper}>
      <Nav />

      <div className={styles.container}>
        {/* Header Hero */}
        <section className={styles.heroSection}>
          <div className={styles.heroGlow}></div>
          <div className={styles.heroContent}>
            <span className="badge">
              Knowledge Base // System Design & Code
            </span>
            <h1 className={styles.pageTitle}>
              Technical <span className="glow-text">Insights</span> & Notes
            </h1>
            <p className={styles.pageSubtitle}>
              Deep dives on Next.js architectures, modern full-stack engineering, AI-augmented development, and building high-performance web systems.
            </p>

            {/* Category Filter Tabs */}
            <div className={styles.filterTabsRow}>
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
          </div>
        </section>

        {/* Featured Deep Dive Article */}
        {featuredArticle && activeCategory === "All Topics" && (
          <section className={styles.featuredSection}>
            <div className={styles.featuredCard}>
              <div className={styles.featuredBody}>
                <div>
                  <div className={styles.featuredMeta}>
                    <span className={styles.featuredCategory}>
                      Featured // {featuredArticle.category || featuredArticle.tag}
                    </span>
                    <span className={styles.featuredReadTime}>
                      {featuredArticle.date} • {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className={styles.featuredTitle} style={{ marginTop: "14px" }}>
                    <a href={featuredArticle.link} target="_blank" rel="noopener noreferrer">
                      {featuredArticle.title}
                    </a>
                  </h2>

                  <p className={styles.featuredSummary} style={{ marginTop: "12px" }}>
                    {featuredArticle.summary}
                  </p>
                </div>

                {/* Key Takeaways Box */}
                {featuredArticle.keyTakeaways && (
                  <div className={styles.takeawaysBox}>
                    <div className={styles.takeawaysTitle}>Key Engineering Takeaways</div>
                    <ul className={styles.takeawaysList}>
                      {featuredArticle.keyTakeaways.map((point, idx) => (
                        <li key={idx} className={styles.takeawayItem}>
                          <span className={styles.takeawayDot}>›</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <a
                    href={featuredArticle.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ width: "fit-content", padding: "12px 28px" }}
                  >
                    <span>Read Full Article on Medium</span>
                    <FiExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className={styles.featuredImageWrap}>
                <Image
                  src={`/images/blogs/${featuredArticle.image || "blog2.jpg"}`}
                  alt={featuredArticle.title}
                  width={600}
                  height={440}
                  className={styles.featuredImg}
                  priority
                  sizes="(max-width: 900px) 100vw, 600px"
                />
              </div>
            </div>
          </section>
        )}

        {/* Filtered Articles Grid */}
        <section className={styles.articlesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeading}>
              {activeCategory === "All Topics" ? "All Engineering Publications" : `${activeCategory} Articles`}
            </h2>
            <span className={styles.articleCount}>
              Showing {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
            </span>
          </div>

          <div className={styles.articlesGrid}>
            {filteredArticles.map((article, idx) => (
              <article key={article._id || idx} className={styles.articleCard}>
                <div className={styles.cardImageWrap}>
                  <Image
                    src={`/images/blogs/${article.image || "blog1.webp"}`}
                    alt={article.title}
                    width={500}
                    height={260}
                    className={styles.cardImg}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                </div>

                <div className={styles.cardBody}>
                  <div>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardTag}>{article.category || article.tag}</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className={styles.cardTitle} style={{ marginTop: "12px" }}>
                      <a href={article.link} target="_blank" rel="noopener noreferrer">
                        {article.title}
                      </a>
                    </h3>

                    <p className={styles.cardSummary} style={{ marginTop: "10px" }}>
                      {article.summary}
                    </p>
                  </div>

                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.readAction}
                  >
                    <span>Read on Medium</span>
                    <IoIosArrowRoundForward size={20} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter / Engineering Notes Banner */}
        <section className={styles.newsletterBanner}>
          <span className="badge">Stay Updated</span>
          <h2 className={styles.newsletterTitle}>Engineering Notes Delivered</h2>
          <p className={styles.newsletterDesc}>
            Join other developers receiving occasional deep-dives into modern Next.js patterns, full-stack architecture, and pragmatic engineering.
          </p>

          {subscribed ? (
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#34d399", fontWeight: 700, marginTop: "10px" }}>
              <FiCheckCircle size={22} />
              <span>Thank you! You have been subscribed to technical updates.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
              <input
                type="email"
                placeholder="Enter your work email..."
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className={styles.emailInput}
              />
              <button type="submit" className={`btn-primary ${styles.subscribeBtn}`}>
                Subscribe
              </button>
            </form>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
