import React from "react";
import { Link } from "react-router-dom";
import styles from "../stylesheets/homepage.module.css";

function Project({ name, link }) {
  const handleClick = (e) => {
    if (link === "/myinformedglobe") {
      e.preventDefault();
      window.location.reload();
      window.location.href = link;
    }
  };

  return (
    <div className={styles.section}>
      <Link to={link} className={styles.link} onClick={handleClick}>
        <h1 className={styles.title}>{name}</h1>
      </Link>
    </div>
  );
}

export default Project;
