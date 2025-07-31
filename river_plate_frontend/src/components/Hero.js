import React from "react";
import styles from "./Hero.module.css";
import heroImg from "../assets/river-hero.jpg";

// PUBLIC_INTERFACE
function Hero() {
  return (
    <section className={styles.hero}>
      <img src={heroImg} alt="River Plate Stadium" className={styles.heroImg} />
      <div className={styles.overlay}>
        <h1 className={styles.title}>
          Club Atlético <span className={styles.river}>River Plate</span>
        </h1>
        <p className={styles.subtitle}>
          Welcome to the official River Plate club website!
        </p>
      </div>
    </section>
  );
}

export default Hero;
