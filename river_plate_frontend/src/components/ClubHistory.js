import React from "react";
import styles from "./ClubHistory.module.css";

// PUBLIC_INTERFACE
function ClubHistory() {
  return (
    <section className={styles.clubHistory} id="history">
      <h2>Club History</h2>
      <p>
        Founded in 1901, <strong>Club Atlético River Plate</strong> is one of Argentina's most historic and successful football clubs,
        known for decades of dominance in both national and international competitions, deeply rooted in Buenos Aires culture.
      </p>
      <p>
        Nicknamed <strong>"Los Millonarios"</strong>, River Plate has won numerous Primera División titles and Copa Libertadores trophies.
        Its legendary stadium, <em>El Monumental</em>, stands as an icon of Argentine football, and the club is celebrated for producing world-class talent and passionate fans.
      </p>
      <p>
        River's rivalry with Boca Juniors forms the heart of the world-famous Superclásico—one of the most heated and historic derbies in global sports.
        River Plate represents tradition, pride, and sporting excellence on and off the pitch.
      </p>
    </section>
  );
}

export default ClubHistory;
