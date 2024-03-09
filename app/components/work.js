'use client'

import React from 'react';
import styles from '../styles/work.module.css'; 
import Image from 'next/image';
import troy from '../assets/troyagency.png'
import everfur from '../assets/everfur.png'
import { IoIosArrowRoundForward } from "react-icons/io";


function Work() {
  return (
    <div>
      <section id={styles.works} className={styles.worksSection}>
        {/* <div className={styles.magicpattern}> */}
        <div className={styles.container}>
          <div className={styles.worksTitle}>
            <p>Portfolio</p>
            <h1>My Works</h1>
          </div>
          <div className={styles.workContainer}>
            <div className={styles.workCard}>
              <div className={styles.cardDetails}>
                <h4>Everfur</h4>
                <p>We help to generte positive cash flow & use the proceeds in further</p>
                <div className={styles.btn}>
                <span className={styles.btn_text}>View Details</span>
                <span className={styles.iconWork}><IoIosArrowRoundForward size={25}/></span></div>
              </div>
              <div className={styles.workImage}>
              <div >
                  <Image src={everfur} 
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'max-content', borderRadius: '10px' }}
                    className={styles.image} alt='Everfur Site'/>
                </div>
              </div>
            </div>

            <div className={styles.workCardSecond}>
              <div className={styles.cardDetails}>
                <h4>The Troy Agency</h4>
                <p>We help to generte positive cash flow & use the proceeds in further</p>
                <div className={styles.btn}>View Details <span className={styles.iconWork}><IoIosArrowRoundForward size={25}/></span></div>
              </div>
              <div className={styles.workImageSecond}>
                <div className={styles.image}>
                  <Image src={troy} 
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', borderRadius: '10px' }} alt='The Troy Agency Site'/>
                </div>
              </div>
            </div>
            
          </div>
          {/* </div> */}
        </div>
      </section>
    </div>
  );
}

export default Work;
