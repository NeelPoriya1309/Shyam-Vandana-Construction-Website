import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
function NavBar() {
  return (
    <nav>
      <ul className={styles['nav-links']}>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#project">Projects</a>
        </li>
        <li>
          <Link to="/">
            <img className={styles['logo']} src="/logo-nobg.png"></img>
          </Link>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
