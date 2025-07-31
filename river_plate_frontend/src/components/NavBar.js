import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import { CLUB_COLORS } from "../clubTheme";

// PUBLIC_INTERFACE
function NavBar() {
  const location = useLocation();
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/history", label: "Club History" },
    { to: "/news", label: "News & Updates" },
    { to: "/squad", label: "Squad" },
    { to: "/schedule", label: "Schedule" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <nav
      className={styles.navbar}
      style={{
        background: CLUB_COLORS.secondary,
      }}
    >
      <div className={styles.container}>
        <Link to="/" className={styles.brand}>
          <span style={{ color: CLUB_COLORS.secondary, fontWeight: "bold" }}>
            River
          </span>
          <span style={{ color: CLUB_COLORS.accent, fontWeight: "bold" }}>
            Plate
          </span>
        </Link>
        <ul className={styles.navLinks}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`${styles.link} ${
                  location.pathname === to ? styles.active : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
