"use client";

import Image from "next/image";
import stylesOne from "../styles/about.module.css";
import styles from "../styles/portfolioDetails.module.css";
import Link from "next/link";
import Deep from "../assets/deep.jpeg";
import Code from "../assets/me2.jpeg";
import { FaBootstrap, FaGithub, FaHtml5, FaReact, FaShopify, FaWordpress } from "react-icons/fa6";
import { SiCss3, SiExpress, SiJavascript, SiMongodb, SiMui, SiMysql, SiNextdotjs, SiRemix, SiWoocommerce } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import Work from "../components/work";


function AboutPage() {
  return (
    <div>
      <div className={styles.portfolioHeading}>
        <div className={styles.container}>
          <div className={styles.portfolioHeadingText}>
            <h2>About</h2>
          </div>
        </div>
      </div>

      <div className={stylesOne.containerTwo}>
        <div className={stylesOne.about_container}>
          <div className={stylesOne.imageSection}>
            <Image
              src={Deep}
              alt="Your Alt Text"
              className={stylesOne.image}
              width="auto"
              height="368px"
            />
          </div>
          <div className={stylesOne.aboutTextContainer}>
            <div className={stylesOne.subContainer}>
              <h1 className={stylesOne.aboutTitle}>
                The Techie with a <span>Creative Twist</span>
              </h1>
              <p className={stylesOne.aboutText}>
                Hi there! I&apos;m Jyoti Patowary, a web developer with a
                fervent passion for crafting beautiful and functional online
                experiences. While I spend my weekdays bringing websites to life
                in a professional setting, my love for this craft spills over
                into my freelance work.
              </p>
              <p className={stylesOne.aboutText}>
                For me, web development isn&apos;t just about writing code.
                It&apos;s about taking ideas and transforming them into
                something interactive and engaging for users. I find immense
                satisfaction in seeing my creations come to life and knowing
                they&apos;ll make a positive impact on how people navigate the
                web.
              </p>
            </div>
          </div>
        </div>
        <div className={stylesOne.about_container}>
          <div className={stylesOne.aboutTextContainer}>
            <div className={stylesOne.subContainer}>
              <h1 className={stylesOne.aboutTitle}>
                From Hospitality to Code: <span>My Unexpected Journey</span>
              </h1>
              <p className={stylesOne.aboutText}>
                They say life is a journey, and mine has certainly taken some
                unexpected turns! While my background might seem far removed
                from technology - I used to be a hotelier! - a hidden passion
                for creating and problem-solving led me down a path I never
                anticipated: web development.
              </p>
              <p className={stylesOne.aboutText}>
                Becoming a self-taught developer wasn&apos;t easy. Countless
                hours were spent learning new skills, facing challenges head-on,
                and constantly pushing myself to achieve my goals. But with
                every line of code I wrote, a sense of accomplishment grew.
                Transforming ideas into digital experiences fueled my passion,
                and the satisfaction of seeing my creations come to life is
                truly rewarding.
              </p>
            </div>
            <div className={stylesOne.imageSection}>
              <Image
                src={Code}
                alt="Your Alt Text"
                className={stylesOne.imageOne}
                width="auto"
                height="auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={stylesOne.passion}>
        <div className={stylesOne.containerTwo}>
          <div className={stylesOne.passion_container}>
          <h1 className={stylesOne.aboutTitle}>
            My Passion for <span>Development</span>
          </h1>
          <p className={stylesOne.aboutText}>
            Web development allows me to take abstract ideas and turn them into
            tangible, interactive experiences. There&apos;s a magic in seeing a
            website come together, from the initial planning stages to the final
            launch. I find myself constantly intrigued by the ever-evolving
            nature of this field, with new technologies and frameworks emerging
            all the time.
          </p>
          </div>
        </div>
      </div>
      <div className={stylesOne.containerTwo}>
      <h1 className={stylesOne.aboutTitle}>
         My Tech Stack: <span>Tools of the Trade</span>
          </h1>
          <div className={stylesOne.tech}>
          <div className={stylesOne.tools}>
            <FaHtml5 size={60}/>
            </div>
            <div className={stylesOne.tools}>
            <SiCss3 size={60}/>
            </div>
            <div className={stylesOne.tools}>
            <SiJavascript size={60}/>
            </div>
            <div className={stylesOne.tools}>
            <FaReact size={60}/>
            </div>
            <div className={stylesOne.tools}>
            <SiNextdotjs size={60}/>
            </div>
            <div className={stylesOne.tools}>
            <SiRemix size={60}/>
            </div>
            <div className={stylesOne.tools}>
            <SiExpress size={60}/>
            </div>
            <div className={stylesOne.tools}>
            <DiNodejs size={60}/>
            </div>
            <div className={stylesOne.tools}>
            <SiMongodb size={60}/>
            </div>
            <div className={stylesOne.tools}>
            <SiMysql size={60}/>
            </div>
            <div className={stylesOne.tools}>
            <FaBootstrap size={60}/>
            </div>
            <div className={stylesOne.tools}>
            <SiMui size={60}/>
            </div>
            <div className={stylesOne.tools}>
            <FaShopify size={60}/>
            </div>
            <div className={stylesOne.tools}>
            <FaWordpress size={60}/>
            </div>
            <div className={stylesOne.tools}>
            <SiWoocommerce size={60}/>
            </div>
            <div className={stylesOne.tools}>
            <FaGithub size={60}/>
            </div>
          </div>
        </div>

        {/* <div className={stylesOne.containerTwo}>
      <h1 className={stylesOne.aboutTitle}>
      A Look at My <span>Projects</span>
          </h1>
          </div> */}

          <Work/>
    </div>

  );
}

export default AboutPage;
