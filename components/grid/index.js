import React from 'react';
import styles from './grid.module.css';

export default function Grid({children}) {
  return <div className={styles.grid}>{children}</div>
}
