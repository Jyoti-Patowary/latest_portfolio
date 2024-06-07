'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/portfolioDetails.module.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import { AiOutlineCheck } from "react-icons/ai";
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react';


function PortfolioDetailsWrapper() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioDetails />
      </Suspense>
    );
  }

function PortfolioDetails() {
    const searchParams = useSearchParams();
    const [portfolioDetail, setPortfolioDetail] = useState(null);
    const id = searchParams.get("id") ?? null;
    console.log("id", id);

    useEffect(() => {
        async function fetchPortfolioDetail() {
            try {
                const res = await fetch("/api/portfolio_details");
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await res.json();
                const detail = data.result.find(item => item._id === id);
                setPortfolioDetail(detail);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        if (id) {
            fetchPortfolioDetail();
        }
    }, [id]);

    if (!portfolioDetail) {
        return (
            <div className={styles.loadingScreen}>
                <div className={styles.spinner}></div>
            </div>
        );
    }

    return (
        <div>
            <div className={styles.portfolioHeading}>
                <div className={styles.container}>
                    <div className={styles.portfolioHeadingText}>
                        <h2>Case Study</h2>
                    </div>
                </div>
            </div>

            <div className={styles.detailContainer}>
                <div className={styles.portfolioDetailsContainer}>
                    {portfolioDetail.site_image && (
                        <div className={styles.portfolioDetailsImage}>
                            <Image
                                src={portfolioDetail.site_image}
                                width={0}
                                height={0}
                                sizes="100%"
                                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                                alt={portfolioDetail.site_name || 'Portfolio Site'}
                            />
                        </div>
                    )}
                    <div className={styles.portfolioDetailsText}>
                        <h4>{portfolioDetail.site_name}</h4>
                        <p>{portfolioDetail.site_intro}</p>
                    </div>
                    <div className={styles.portfolioCategoryContainer}>
                        <div className={styles.portfolioCategoryDate}>
                            <h4>Date</h4>
                            <p>{portfolioDetail.estimate[0]?.date || "N/A"}</p>
                        </div>
                        <div className={styles.portfolioCategoryDate}>
                            <h4>Category</h4>
                            <p>{portfolioDetail.estimate[0]?.category || "N/A"}</p>
                        </div>
                        <div className={styles.portfolioCategoryDate}>
                            <h4>Estimation</h4>
                            <p>{portfolioDetail.estimate[0]?.estimation || "N/A"}</p>
                        </div>
                    </div>

                    <div className={styles.portfolioPlanning}>
                        <h4>{portfolioDetail.planning_title}</h4>
                        <p>{portfolioDetail.planning_text}</p>
                        <div className={styles.ClientCare}>
                            {portfolioDetail.client_care.map((care, index) => (
                                <div key={index} className={styles.ClientCareGroup}>
                                    <Image src={care.care_img} height={50} width={50} alt=""/>
                                    <p>{care.care_text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.portfolioDetailsText}>
                        <div className={styles.whatWeDid}>
                            <h4>What We Did For This Project</h4>
                            {portfolioDetail.site_link && (
                                <Link href={portfolioDetail.site_link}>
                                    <button className={styles.whatWeDidButton}>
                                        Visit {portfolioDetail.title} site
                                    </button>
                                </Link>
                            )}
                        </div>
                        <div className={styles.whatWeDidText}>
                            <p>{portfolioDetail.what_we_did_text}</p>
                            <ul className={styles.lists}>
                                {portfolioDetail.what_we_did_list.map((item, index) => (
                                    <li key={index} className={styles.listItems}>
                                        <span className={styles.itemIcon}>
                                            <AiOutlineCheck size={25} />
                                        </span>
                                        <span className={styles.itemText}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.card}>
                        {portfolioDetail.final_img.filter(imgSrc => imgSrc).map((imgSrc, index) => (
                            <div key={index} className={styles.cardImage}>
                                <Image
                                    src={imgSrc}
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                                    alt={`Final image ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>

                    <div className={styles.portfolioPlanning}>
                        <h4>{portfolioDetail.final_title}</h4>
                        <p>{portfolioDetail.final_text}</p>
                    </div>

                    <div className={styles.pagination}>
                        <Link href="/pages/portfolio-details">
                            <div className={styles.btnPagignation}>
                                <span className={styles.iconWorkOne}>
                                    <IoIosArrowRoundBack size={25} />
                                </span>
                                <span className={styles.btn_text}>View Previous</span>
                            </div>
                        </Link>
                        <Link href="/pages/portfolio-details">
                            <div className={styles.btnPagignation}>
                                <span className={styles.btn_text}>View Next</span>
                                <span className={styles.iconWorkTwo}>
                                    <IoIosArrowRoundForward size={25} />
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioDetailsWrapper;
