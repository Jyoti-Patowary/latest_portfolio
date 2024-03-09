'use client'

import { useEffect } from 'react';
import styles from "../styles/hero.module.css";
import { AiOutlineSend } from "react-icons/ai";

function Hero_section() {
    useEffect(() => {
        const typeWriterEffect = (element, text, speed) => {
            let index = 0;
            const type = () => {
                element.innerHTML += text.charAt(index);
                index++;

                if (index < text.length) {
                    setTimeout(type, speed);
                }
            };

            type(); // Start the typewriter effect immediately
        };

        const typewriterElements = document.querySelectorAll(`.${styles.typewriter}`);
        typewriterElements.forEach((element, index) => {
            const text = element.textContent.trim(); 
            element.innerHTML = ''; 
            const speed = 100; 
            typeWriterEffect(element, text, speed * (index + 1));
        });
    }, []);

    return (
        <div className={styles.heroContainer}>
            <div className={styles.container}>
                <div className={styles.hero_heading}>
                    {/* <div className={`${styles.typewriter} h2`}>
                        #Self Taught Dev #{' '}
                        <span className={styles.highlight}>Next Js</span>
                    </div> */}
                    <h2>Solving big problems</h2>
                    <h2>Failing a lot in the process</h2>
                </div>
            </div>
        </div>
    );
}

export default Hero_section;
