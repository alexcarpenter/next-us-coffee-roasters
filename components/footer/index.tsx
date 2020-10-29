import * as React from "react";
import styles from "./footer.module.css";

const Footer: React.FC<{}> = ({ children }) => {
  return <footer className={styles.footer}>{children}</footer>;
};

export default Footer;
