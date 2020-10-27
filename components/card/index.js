import styles from "./card.module.css";

function Card({ children }) {
  return <article className={styles.card}>{children}</article>;
}

function Heading({ children }) {
  return <h2 className={styles.heading}>{children}</h2>;
}

function Description({ children }) {
  return <p className={styles.description}>{children}</p>;
}

Card.Heading = Heading;
Card.Description = Description;

export default Card;
