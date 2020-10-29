import styles from "./header.module.css";

const Header: React.FC = ({ children }) => {
  return <header className={styles.header}>{children}</header>;
};

export default Header;
