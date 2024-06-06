"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/work.module.css";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

function Work() {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3000/api/portfolio_details");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        console.log(data);
        setPortfolioData(data.result.slice(0, 4));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <section id={styles.works} className={styles.worksSection}>
        <div className={styles.container}>
          <div className={styles.worksTitle}>
            <h1 className={styles.aboutTitle}>
              A Look at My <span>Projects</span>
            </h1>
          </div>
          <div className={styles.workContainer}>
            {Array.isArray(portfolioData) &&
              portfolioData.map((item) => (
                <div key={item._id} className={styles.workCard}>
                  <div className={styles.workImage}>
                    <Image
                      src={item.final_img[0]}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className={styles.image}
                      alt={item.site_name}
                    />
                  </div>
                  <div className={styles.cardDetails}>
                    <h4>{item.title}</h4>
                    {/* <p>{item.description}</p> */}
                    <Link href={{ pathname: "/pages/portfolio-details", query: { id: item._id } }}>
                      <div className={styles.btn}>
                        <span className={styles.btn_text}>View Details</span>
                        <span className={styles.iconWork}>
                          <IoIosArrowRoundForward size={25} className={styles.icon}/>
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
              <Link className={styles.ctaButton} href="/pages/work" >Explore My Work</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
