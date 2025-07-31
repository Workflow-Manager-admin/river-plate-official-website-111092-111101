import React from "react";
import styles from "./News.module.css";

// Placeholder data
const sampleNews = [
  {
    title: "River wins Superclásico!",
    date: "2024-05-12",
    summary:
      "River Plate vanquished Boca Juniors 2-0 in a thrilling Superclásico, boosting championship hopes.",
    link: "#",
  },
  {
    title: "Youth squad clinches title",
    date: "2024-05-10",
    summary:
      "The River Plate U20 team secured the national youth title, showcasing club's strong academy.",
    link: "#",
  },
];

// PUBLIC_INTERFACE
function News() {
  return (
    <section className={styles.newsSection} id="news">
      <h2>News &amp; Updates</h2>
      <div className={styles.newsGrid}>
        {sampleNews.map((item, idx) => (
          <div className={styles.newsItem} key={idx}>
            <div className={styles.metaDate}>{item.date}</div>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <a href={item.link} className={styles.readMore}>Read more</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default News;
