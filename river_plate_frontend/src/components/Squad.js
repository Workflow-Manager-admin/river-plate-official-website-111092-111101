import React from "react";
import styles from "./Squad.module.css";
import defaultPlayer from "../assets/player-placeholder.png";

// Example data
const squad = [
  {
    name: "Franco Armani",
    position: "Goalkeeper",
    photo: defaultPlayer,
    bio: "Veteran shot-stopper, multiple title winner, key figure in River defense.",
  },
  {
    name: "Milton Casco",
    position: "Defender",
    photo: defaultPlayer,
    bio: "Experienced left-back, notable for stamina and overlapping runs.",
  },
  {
    name: "Enzo Pérez",
    position: "Midfielder",
    photo: defaultPlayer,
    bio: "Skilful playmaker, essential for club strategy and leadership.",
  },
  {
    name: "Lucas Beltrán",
    position: "Forward",
    photo: defaultPlayer,
    bio: "Young striker with pace and sharp finishing skills.",
  },
];

// PUBLIC_INTERFACE
function Squad() {
  return (
    <section className={styles.squadSection} id="squad">
      <h2>Current Squad</h2>
      <div className={styles.squadGrid}>
        {squad.map((player, idx) => (
          <div className={styles.playerCard} key={idx}>
            <img
              src={player.photo}
              alt={player.name}
              className={styles.playerImg}
            />
            <h3>{player.name}</h3>
            <span className={styles.position}>{player.position}</span>
            <p className={styles.bio}>{player.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Squad;
