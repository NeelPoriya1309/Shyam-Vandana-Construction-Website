import { useState } from 'react';
import styles from './App.module.css';
import ProjectCard from './RightProjectCard';
import LeftProjectCard from './LeftProjectCard';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

function App() {
  return (
    <>
      {/* Navbar */}
      <nav>
        <ul className={styles['nav-links']}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="">
              <img className={styles['logo']} src="./../public/logo.png"></img>
            </a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Header */}

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

      {/* Contact Section */}

      <section id="about" className={styles['about']}>
        <div className={styles['title']}>
          <h2>About Us</h2>
          <div className={styles['bar']}></div>
        </div>
        <AboutUs />
      </section>

      {/* Project Section */}

      <section
        id="project"
        style={{ backgroundColor: 'rgba(255, 220, 179, 0.2)' }}
        className={styles['projects']}
      >
        <div className={styles['title']}>
          <h2>Recent Projects</h2>
          <div className={styles['bar']}></div>
        </div>
        <LeftProjectCard />
        <ProjectCard />
        <LeftProjectCard />
        <ProjectCard />
      </section>

      {/* Contact Section */}

      <section id="contact" className={styles['contact']}>
        <div className={styles['title']}>
          <h2>Contact Us</h2>
          <div className={styles['bar']}></div>
        </div>
        <ContactUs />
      </section>

      <footer>
        <p className={styles['footer-company']}>Shyam Vandana Construction</p>
        <p className={styles['footer-copyrights']}>
          Copyright &#169; {new Date().getFullYear()} All rights resereved
        </p>
      </footer>
    </>
  );
}

export default App;
