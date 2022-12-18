import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <p className={styles['footer-company']}>Shyam Vandana Construction</p>
      <p className={styles['footer-copyrights']}>
        Copyright &#169; {new Date().getFullYear()} All rights resereved
      </p>
    </footer>
  );
};

export default Footer;
