'use client'


import Image from "next/image";
// import styles from "../styles/hero.module.css";
import styles from "../styles/portfolioDetails.module.css";
import everfur from '../assets/everfur.png';
import { IoIosArrowRoundForward } from "react-icons/io";


function PortfolioDetails() {

    return (
        <div>
            <div className={styles.portfolioHeading}>
                <div className={styles.container}>
                    <div className={styles.portfolioHeadingText}>
                        <h2>Portfolio Details</h2>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.portfolioDetailsContainer}>
                    <div className={styles.portfolioDetailsImage}>
                        <Image src={everfur}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto', borderRadius: '10px' }} 
                            alt='Everfur Site' />
                    </div>
                    <div className={styles.portfolioDetailsText}>
                        <h4>The Everfur Agency</h4>
                        <p>We help to generte positive cash flow & use the proceeds in further</p>
                        <div className={styles.btn}>View Details <span className={styles.iconWork}><IoIosArrowRoundForward size={25}/></span>
                    </div>
                </div>
            </div>
        </div>
         </div>
    );
}

export default PortfolioDetails;
