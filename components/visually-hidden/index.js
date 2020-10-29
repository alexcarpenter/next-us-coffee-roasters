import styles from './visually-hidden.module.css';

const VisuallyHidden = ({children}) => {
return <span className={styles.hidden}>{children}</span>
}

export default VisuallyHidden;
