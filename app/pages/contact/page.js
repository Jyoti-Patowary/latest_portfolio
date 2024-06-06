
import Nav from "@/app/components/nav";
import stylesOne from "@/app/styles/contact.module.css"
import styles from "../../styles/portfolioDetails.module.css";
import React from "react";
import Footer from "@/app/components/footer";

const Contact = () => {
    return (
        <div>
            <Nav/>
            <div className={styles.portfolioHeading}>
                <div className={styles.container}>
                    <div className={styles.portfolioHeadingText}>
                        <h2>Contact</h2>
                    </div>
                </div>
            </div>

            <div className={stylesOne.contactContainer}>
                <div className={stylesOne.leftContainer}>
                    <div className={stylesOne.getTouch}>
                        <h3>Get in Touch</h3>
                    </div>
                    <div className={stylesOne.chatWithUs}>
                        <h4>Chat with Us:</h4>
                        <p>You can reach out to us via email:</p>
                        <a href="mailto:example@example.com">jpatowary8@gmail.com</a>
                    </div>
                    <div className={stylesOne.callMe}>
                        <h4>Call Me:</h4>
                        <p>Monday to Saturday,</p>
                        <p>9:00 AM - 6:00 PM</p>
                        <a href="tel:+91-9999999999">+91-9999999999</a>
                    </div>
                    {/* <div className={stylesOne.socialMedia}>
                        <h4>Social Media:</h4>
                        <div className={stylesOne.socialIcons}>
                            <a href="link_to_facebook"><i className="fab fa-facebook"></i></a>
                            <a href="link_to_twitter"><i className="fab fa-twitter"></i></a>
                            <a href="link_to_instagram"><i className="fab fa-instagram"></i></a>
                            <a href="link_to_linkedin"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div> */}
                </div>
                <div className={stylesOne.rightContainer}>
                    <div className={stylesOne.contactForm}>
                        {/* <h3>Contact Form</h3> */}
                        <form>
                            <div className={stylesOne.nameForm}>
                                <div className={stylesOne.firstName}>
                                    <label htmlFor="name">First Name:</label>
                                    <input type="text" id="name" name="name" required />
                                </div>

                                <div className={stylesOne.lastName}>
                                    <label htmlFor="last_name">Last Name:</label>
                                    <input type="text" id="last_name" name="last_name" required />
                                </div>
                            </div>

                            <label htmlFor="company">Company:</label>
                            <input type="text" id="company" name="company" required />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />

                            <label htmlFor="phone">Phone:</label>
                            <input type="text" id="phone" name="phone" required />

                            {/* <div className={stylesOne.whereToFind}>
                                <h4>Where You Can Find Me:</h4>
                                <div className={stylesOne.socialIcons}>
                                    <a href="link_to_facebook">Facebook</a>
                                    <a href="link_to_x">X</a>
                                    <a href="link_to_linkedin">Linkedin</a>
                                    <a href="link_to_resume">Resume</a>
                                    <a href="link_to_instagram">Reference</a>
                                </div>
                            </div> */}

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required></textarea>

                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact;
