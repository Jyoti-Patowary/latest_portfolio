import React from 'react';
import styles from '../styles/blogs.module.css';
import Image from 'next/image';
  import blog from '../../public/images/blogs/blog1.webp';
  import blog2 from '../../public/images/blogs/blog2.jpg';
import { IoIosArrowRoundForward } from 'react-icons/io';

const blogData = [
  {
    tag: 'Version Control',
    title: 'A Step-by-Step Guide to Pushing Your Existing Code to Git',
    image: blog,
    link: 'https://medium.com/@jpatowary8/a-step-by-step-guide-to-pushing-your-existing-code-to-git-40278290a38d',
  },
  {
    tag: 'AI vs Human',
    title: 'AI and Coding: A Future of Collaboration, Not Competition — Navigating the Landscape with Recent Developments',
    image: blog2,
    link: 'https://medium.com/@jpatowary8/ai-and-coding-a-future-of-collaboration-not-competition-navigating-the-landscape-with-recent-53c9d28ca6b7'
  },
];

function truncateTitle(title) {
  const words = title.split(' ');
  if (words.length > 12) {
    return words.slice(0, 12).join(' ') + '...';
  }
  return title;
}

async function Blogs() {
  const url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jpatowary8";
  const data = await getData();
  // console.log(data);

  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  return (
    <div>
      <section className={styles.blogSection}>
        <div className={styles.container}>
          <div className={styles.blogTitle}>
            <h1>Blogs</h1>
          </div>
          <div className={styles.blogContainer}>
            {blogData.map((blog, index) => (
              <div key={index} className={styles.blogCards}>
                <Image
                  src={blog.image}
                  sizes="100vw"
                  style={{ width: '100%', height: '400px', borderRadius: '10px' }}
                  alt={`Blog Image - ${index + 1}`}
                  className={styles.blogCardsImage}
                />
                <div className={styles.blogCardDetails}>
                  <h4>{blog.tag}</h4>
                  <h3>{truncateTitle(blog.title)}</h3>
                  <div className={styles.btn}>
                    <a href={blog.link} className={styles.btn_text} target="_blank" rel="noopener noreferrer">
                      Read More
                    </a>
                    <span className={styles.iconBlogs}>
                      <IoIosArrowRoundForward size={25} color='#5D636A'/>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
