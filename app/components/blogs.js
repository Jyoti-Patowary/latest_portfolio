import React from "react";
import styles from "../styles/blogs.module.css";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import { fallbackBlogs } from "../data/portfolioData";

function Blogs() {
  const blogItems = fallbackBlogs.slice(0, 2);

  return (
    <section id="blogs" className={styles.blogSection}>
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.sectionPre}>{"// Thoughts & Engineering"}</span>
          <h2 className={styles.title}>
            Latest <span>Insights</span>
          </h2>
        </div>

        <div className={styles.blogsGrid}>
          {blogItems.map((blog, index) => (
            <article key={blog._id || index} className={styles.blogCard}>
              <div className={styles.imageWrapper}>
                <span className={styles.tagBadge}>{blog.tag || "Engineering"}</span>
                <Image
                  src={`/images/blogs/${blog.image}`}
                  width={600}
                  height={320}
                  alt={blog.title}
                  className={styles.blogImage}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>

              <div className={styles.cardContent}>
                <div>
                  <div className={styles.metaRow}>
                    <span>{blog.date || "2024"}</span>
                    <span>•</span>
                    <span>{blog.readTime || "5 min read"}</span>
                  </div>

                  <h3 className={styles.articleTitle}>
                    <a href={blog.link} target="_blank" rel="noopener noreferrer">
                      {blog.title}
                    </a>
                  </h3>

                  <p className={styles.articleSummary}>{blog.summary}</p>
                </div>

                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.readMoreLink}
                >
                  <span>Read on Medium</span>
                  <IoIosArrowRoundForward size={22} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.ctaArea}>
          <Link href="/pages/blogs">
            <button className="btn-secondary">
              <span>View All Publications</span>
              <IoIosArrowRoundForward size={22} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
