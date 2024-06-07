'use client';

import Nav from "@/app/components/nav";
import stylesOne from "@/app/styles/contact.module.css";
import styles from "../../styles/portfolioDetails.module.css";
import React, { useState } from "react";
import Footer from "@/app/components/footer";
import { IoIosCall } from "react-icons/io";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("success");
        setMessageType("success");
        setFormData({
          name: "",
          last_name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setMessage("Message not sent: " + result.message);
        setMessageType("error");
      }
    } catch (error) {
      setMessage("Message not sent: " + error.message);
      setMessageType("error");
    }

    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <Nav />
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
            <a href="mailto:jyotipatowary9@gmail.com">jyotipatowary9@gmail.com</a>
          </div>
          <div className={stylesOne.callMe}>
            <h4>Call Me:</h4>
            <p>Monday to Saturday,</p>
            <p>9:00 AM - 6:00 PM</p>
            <a href="tel:+91-7002495940" style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: 600 }}>
              <IoIosCall color="red" size={25} /> Connect on call
            </a>
          </div>
        </div>
        <div className={stylesOne.rightContainer}>
          <div className={stylesOne.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={stylesOne.nameForm}>
                <div className={stylesOne.firstName}>
                  <label htmlFor="name">First Name:</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className={stylesOne.lastName}>
                  <label htmlFor="last_name">Last Name:</label>
                  <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} required />
                </div>
              </div>

              <label htmlFor="company">Company:</label>
              <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

              <label htmlFor="phone">Phone:</label>
              <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className={stylesOne.overlay}>
          <div className={stylesOne.popup}>
            {messageType === "success" ? (
              <>
                <h2 style={{ fontWeight: 'bold' }}>Thank you for contacting me.</h2>
                <p>I have received your message and will be in touch as soon as possible.</p>
              </>
            ) : (
              <h2 className={stylesOne.errorMessage}>{message}</h2>
            )}
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Contact;
