import React from "react";
import styles from "./MatchSchedule.module.css";

// Sample match data
const matches = [
  {
    date: "2024-05-16",
    opponent: "San Lorenzo",
    venue: "Home",
    result: "",
  },
  {
    date: "2024-05-23",
    opponent: "Independiente",
    venue: "Away",
    result: "",
  },
  {
    date: "2024-06-01",
    opponent: "Boca Juniors",
    venue: "Home",
    result: "",
  },
];

// PUBLIC_INTERFACE
function MatchSchedule() {
  return (
    <section className={styles.scheduleSection} id="schedule">
      <h2>Upcoming Matches</h2>
      <table className={styles.matchTable}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Opponent</th>
            <th>Venue</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((m, idx) => (
            <tr key={idx}>
              <td>{m.date}</td>
              <td>{m.opponent}</td>
              <td>{m.venue}</td>
              <td>{m.result || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default MatchSchedule;
