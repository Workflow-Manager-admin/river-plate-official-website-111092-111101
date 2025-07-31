import React from "react";
import styles from "./Footer.module.css";

// PUBLIC_INTERFACE
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span>
          &copy; {new Date().getFullYear()} River Plate. All rights reserved.
        </span>
        <span>
          Website by <a href="https://www.cariverplate.com.ar/" target="_blank" rel="noopener noreferrer">River Plate</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
