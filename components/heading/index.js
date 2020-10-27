import React from "react";
import styles from "./heading.module.css";

export default function Heading({ prefix }) {
  return (
    <h1 className={styles.heading}>
      <span>{prefix ? prefix : "US"}</span> Coffee Roasters
    </h1>
  );
}
