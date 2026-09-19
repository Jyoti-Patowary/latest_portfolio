"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "../styles/loader.module.css";

export default function Loader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Trigger progress bar when route changes
  useEffect(() => {
    setLoading(true);
    setProgress(30);

    const midTimer = setTimeout(() => {
      setProgress(75);
    }, 100);

    const finishTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 250);
    }, 280);

    return () => {
      clearTimeout(midTimer);
      clearTimeout(finishTimer);
    };
  }, [pathname]);

  // Intercept link clicks to give instant progress feedback before Next.js completes navigation
  useEffect(() => {
    const handleLinkClick = (e) => {
      const target = e.target.closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("#") &&
        href !== pathname &&
        !target.hasAttribute("download") &&
        target.getAttribute("target") !== "_blank"
      ) {
        setLoading(true);
        setProgress(40);
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, [pathname]);

  if (!loading && progress === 0) return null;

  return (
    <>
      <div
        className={styles.topLoaderBar}
        style={{
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
        }}
        aria-hidden="true"
      />
      {loading && progress < 100 && (
        <div className={styles.topLoaderSpinner} aria-hidden="true" />
      )}
    </>
  );
}
