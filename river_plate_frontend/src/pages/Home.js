import React from "react";
import Hero from "../components/Hero";
import News from "../components/News";
import ClubHistory from "../components/ClubHistory";
import Squad from "../components/Squad";
import MatchSchedule from "../components/MatchSchedule";
import styles from "./Home.module.css";

// PUBLIC_INTERFACE
function Home() {
  return (
    <main>
      <Hero />
      <div className={styles.mainContentBlocks}>
        <News />
        <ClubHistory />
        <Squad />
        <MatchSchedule />
      </div>
    </main>
  );
}

export default Home;
