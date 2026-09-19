"use client";

import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import styles from "@/app/styles/contact.module.css";
import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "Sending your message..." });

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ state: "success", message: "Thank you for getting in touch! I have received your message and will respond within 24 hours." });
        setFormData({
          name: "",
          last_name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus({ state: "error", message: result.message || "Something went wrong while sending. Please email me directly." });
      }
    } catch (error) {
      setStatus({ state: "error", message: error.message || "Network error. Please try reaching out directly via email." });
    }

    setShowPopup(true);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Nav />

      {/* Header Banner */}
      <section className={styles.contactPageHero}>
        <div className={styles.container}>
          <span className="badge" style={{ marginBottom: "16px" }}>
            Let&apos;s Connect
          </span>
          <h1 className={styles.pageTitle}>
            Start a <span className="glow-text">Conversation</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Have a project, job opportunity, or contract in mind? Reach out directly or fill out the form below.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <div className={styles.contactContainer}>
        {/* Left Column: Direct Channels */}
        <div className={styles.leftContainer}>
          <div className={styles.channelGroup}>
            <div className={styles.channelItem}>
              <span className={styles.channelLabel}>Email Directly</span>
              <a href="mailto:jpatowary8@gmail.com" className={styles.channelValue}>
                jpatowary8@gmail.com
              </a>
              <span className={styles.channelNote}>Best for project inquiries & collaborations</span>
            </div>

            <div className={styles.channelItem}>
              <span className={styles.channelLabel}>Phone & WhatsApp</span>
              <a href="tel:+917002495940" className={styles.channelValue} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <IoIosCall color="var(--accent-primary)" size={22} /> +91 70024 95940
              </a>
              <span className={styles.channelNote}>Mon - Sat, 9:00 AM - 7:00 PM IST</span>
            </div>

            <div className={styles.channelItem}>
              <span className={styles.channelLabel}>Location & Availability</span>
              <p className={styles.channelValue} style={{ fontSize: "16px" }}>
                Guwahati, Assam, India
              </p>
              <span className={styles.channelNote}>Available for Remote Worldwide & Freelance</span>
            </div>
          </div>

          <div>
            <span className={styles.channelLabel} style={{ display: "block", marginBottom: "12px" }}>
              Connect on Socials
            </span>
            <div className={styles.socialRow}>
              <a
                href="https://github.com/Jyoti-Patowary"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/jyoti-p-b8a886239/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://twitter.com/J__Patowary"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Twitter"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href="mailto:jpatowary8@gmail.com"
                className={styles.socialBtn}
                aria-label="Email"
              >
                <IoMail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className={styles.rightContainer}>
          <h2 className={styles.formTitle}>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">First Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex"
                  required
                  className={styles.inputField}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="last_name">Last Name *</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="e.g. Morgan"
                  required
                  className={styles.inputField}
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  required
                  className={styles.inputField}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="phone">Phone / WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className={styles.inputField}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="company">Company / Project Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Studio or Organization"
                className={styles.inputField}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">Message / Project Details *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your goals, timelines, or specifications..."
                required
                className={styles.textareaField}
              ></textarea>
            </div>

            <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
              {status.state === "loading" ? "Sending Message..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showPopup && (
        <div className={styles.overlay} onClick={() => setShowPopup(false)}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <h3 className={styles.popupTitle}>
              {status.state === "success" ? "Message Delivered!" : "Notice"}
            </h3>
            <p className={styles.popupText}>{status.message}</p>
            <button className={`btn-primary ${styles.closeBtn}`} onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Contact;
