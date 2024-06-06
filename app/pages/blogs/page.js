'use client'

import Footer from "@/app/components/footer";
import styles from "../../styles/portfolioDetails.module.css";
import stylesB from "../../styles/blogpage.module.css";
import Nav from "@/app/components/nav";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";


const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch("/api/blogs");
                const data = await response.json();
                setBlogs(data.result);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    console.log("Blogs:", blogs);

    function truncateTitle(title) {
        const words = title.split(' ');
        if (words.length > 12) {
            return words.slice(0, 12).join(' ') + '...';
        }
        return title;
    }

    const goToPrevSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const goToNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    // Set the first blog as the featured blog
    const featuredBlog = blogs.length > 0 ? blogs[0] : null;

    return (
        <div>
            <Nav />
            <div className={styles.portfolioHeading}>
                <div className={styles.container}>
                    <div className={styles.portfolioHeadingText}>
                        <h2>Blogs</h2>
                    </div>
                </div>
            </div>

            <div className={stylesB.container}>
                {featuredBlog && (
                    <div className={stylesB.featuredContainer}>
                        <div className={stylesB.featuredOne}>
                            <h4>{featuredBlog.category}</h4>
                            <h3>{truncateTitle(featuredBlog.title)}</h3>
                            <div className={stylesB.btn}>
                                <a href={featuredBlog.link} className={stylesB.btn_text} target="_blank" rel="noopener noreferrer">
                                    Read More
                                </a>
                                <span>
                                    <IoIosArrowRoundForward size={25} color='#5D636A' className={stylesB.iconBlogs} />
                                </span>
                            </div>
                        </div>
                        <div className={stylesB.featuredTwo}>
                            <Image src={`/images/blogs/${featuredBlog.image}`} width={400} height={300} alt="Featured Blog Image" className={stylesB.featuredImage} />
                        </div>
                    </div>
                )}
            </div>
            {/* LatestBlog */}
            <div className={stylesB.latestContainer}>
                <div className={stylesB.container}>
                    <div className={stylesB.latestHeading}>
                        <h2>Latest Blogs</h2>
                        <div className={stylesB.btnGroup}>
                            <GrFormPrevious className={stylesB.prev} size={25} onClick={goToPrevSlide}/>
                            <GrFormNext className={stylesB.next} size={25} onClick={goToNextSlide}/>
                        </div>
                    </div>
                    <div className={stylesB.latestBlogs}>
                        <div className={stylesB.latestBlogsContainer}>
                            <Swiper
                              ref={swiperRef}
                                spaceBetween={30}
                                slidesPerView={3}
                                modules={[Navigation]}
                                loop={true}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 50,
                                    },
                                }}
                            >
                                {blogs.map((blog, index) => (
                                    <SwiperSlide key={index}>
                                        <div className={stylesB.latestCards}>
                                            <Image 
                                            src={`/images/blogs/${blog.image}`} 
                                            sizes="100vw"
                                            style={{ width: '100%', height: '400px', borderRadius: '10px' }}
                                            alt="Blog Image" 
                                            className={stylesB.latestBlogsImage} 
                                            />
                                            <h4>{blog.category}</h4>
                                            <h3 className={styles.latesTitle}>{truncateTitle(blog.title)}</h3>
                                            <div className={stylesB.btn}>
                                                <a href={blog.link} className={stylesB.btn_text} target="_blank" rel="noopener noreferrer">
                                                    Read More
                                                </a>
                                                <span>
                                                    <IoIosArrowRoundForward size={25} color='#5D636A' className={stylesB.iconBlogs} />
                                                </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlogPage;
