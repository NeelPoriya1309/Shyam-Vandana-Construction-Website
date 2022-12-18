import styles from './NavBar.module.css';
function NavBar() {
  return (
    <nav>
      <ul className={styles['nav-links']}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="">
            <img className={styles['logo']} src="/logo-nobg.png"></img>
          </a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a
            href="/gallery"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Gallery
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
