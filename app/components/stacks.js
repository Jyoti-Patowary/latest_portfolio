'use client'
import { useEffect, useRef } from 'react';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import styles from '../styles/stacks.module.css';
import { SiExpress, SiHtml5, SiMongodb, SiReact } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaNodeJs, FaShopify, FaWordpress } from 'react-icons/fa6';

export const Stacks = () => {
    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;

        const handleAnimationEnd = () => {
            // Reset the transform property to restart the animation
            container.style.transform = 'translateX(0)';
        };

        container.addEventListener('animationiteration', handleAnimationEnd);

        return () => {
            container.removeEventListener('animationiteration', handleAnimationEnd);
        };
    }, []);

    return (
        <div className={styles.stacksContainer}>
            <div className={styles.container}>
                <div ref={containerRef} className={styles.stackContainer}>
                    {/* First set of slides */}
                    <div className={styles.slide}>
                        <SiHtml5 size={60} className={styles.StacksLogo} />
                    </div>
                    <div className={styles.slide}>
                        <IoLogoCss3 size={60} className={styles.StacksLogo} />
                    </div>
                    <div className={styles.slide}>
                        <IoLogoJavascript size={60} className={styles.StacksLogo} />
                    </div>
                    <div className={styles.slide}>
                        <SiReact size={60} className={styles.StacksLogo} />
                    </div>
                    <div className={styles.slide}>
                        <TbBrandNextjs size={60} className={styles.StacksLogo} />
                    </div>
                    <div className={styles.slide}>
                        <SiMongodb size={60} className={styles.StacksLogo} />
                    </div>
                    <div className={styles.slide}>
                        <FaNodeJs size={60} className={styles.StacksLogo} />
                    </div>
                    <div className={styles.slide}>
                        <SiExpress size={60} className={styles.StacksLogo} />
                    </div>
                    <div className={styles.slide}>
                        <FaShopify size={60} className={styles.StacksLogo} />
                    </div>
                    <div className={styles.slide}>
                        <FaWordpress size={60} className={styles.StacksLogo} />
                    </div>

                    {/* Second set of slides (duplicates the first set) */}
                    <div className={styles.slide}>
                        <SiHtml5 size={60} className={styles.StacksLogo} />
                    </div>
                    <div className={styles.slide}>
                        <IoLogoCss3 size={60} className={styles.StacksLogo} />
                    </div>
                    <div className={styles.slide}>
                        <IoLogoJavascript size={60} className={styles.StacksLogo} />
                    </div>
                    <div className={styles.slide}>
                        <SiReact size={60} className={styles.StacksLogo} />
                    </div>
                    <div className={styles.slide}>
                        <TbBrandNextjs size={60} className={styles.StacksLogo} />
                    </div>
                    <div className={styles.slide}>
                        <SiMongodb size={60} className={styles.StacksLogo} />
                    </div>
                    <div className={styles.slide}>
                        <FaNodeJs size={60} className={styles.StacksLogo} />
                    </div>
                    <div className={styles.slide}>
                        <SiExpress size={60} className={styles.StacksLogo} />
                    </div>
                    <div className={styles.slide}>
                        <FaShopify size={60} className={styles.StacksLogo} />
                    </div>
                    <div className={styles.slide}>
                        <FaWordpress size={60} className={styles.StacksLogo} />
                    </div>
                </div>
            </div>
        </div>
    );
};
