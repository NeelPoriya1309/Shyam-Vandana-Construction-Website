import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles['hero-text']}>
      <h1 className={styles['title-heading']}>
        SHYAM<br></br> VANDANA<br></br> CONSTRUCTION
      </h1>
      <p className={styles['title-subheading']}>
        We are a team of professionals with over{' '}
        {new Date().getFullYear() - 2012} years of experience in construction
        and development. We are committed to providing the best quality
        construction services to our clients.
      </p>
    </div>
  );
};

export default Header;
