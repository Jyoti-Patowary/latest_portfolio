'use client'
import { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/skills.module.css';
import Image from 'next/image';
import next from '../assets/next.png';
import prev from '../assets/prev.png';

const Skills = () => {
    const [skillsData, setSkillsData] = useState(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("http://localhost:3000/api/skills");
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await res.json();
                setSkillsData(data.result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <h1 className={styles.skillTitle}>
                    Tools of My <span>Trade</span>
                </h1>
                <div className={styles.sliderContainer}>
                    <div className={styles.navigationButtons}>
                        <div className={styles.prevButton} onClick={() => sliderRef.current.slickPrev()}>
                            <Image src={prev} width={30} height={30} alt='Previous' />
                        </div>
                        <div className={styles.nextButton} onClick={() => sliderRef.current.slickNext()}>
                            <Image src={next} width={30} height={30} alt='Next' />
                        </div>
                    </div>
                    <Slider {...settings} ref={sliderRef} className={styles.slickContainer}>
                        {Array.isArray(skillsData) &&
                            skillsData.map((skill, index) => (
                                <div key={index} className={styles.slickSlide}>
                                    <div className={styles.card}>
                                        <Image src={skill.image} alt={`${skill.name} logo`} className={styles.logo} width={0} height={0} />
                                        <p className={styles.skillName}>{skill.skill}</p>
                                        <p className={styles.skillDesc}>{skill.desc}</p>
                                    </div>
                                </div>
                            ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Skills;
