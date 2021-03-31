import React from 'react';
import '../src/style.css';
import styles from '../src/style.module.css';

export default function App ({ Component, pageProps }) {
  return (
    <div className={styles.page}>
      <Component {...pageProps} />
    </div>
  );
}