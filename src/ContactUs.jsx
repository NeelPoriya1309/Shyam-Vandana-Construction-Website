import styles from './ContactUs.module.css';

function ContactUs() {
  return (
    <section id="contact" className={styles['contact']}>
      <div className={styles['title']}>
        <h2>Contact Us</h2>
        <div className={styles['bar']}></div>
      </div>
      <div className={styles['container']}>
        <div className={styles['card']}>
          <img src="https://picsum.photos/300/300"></img>
          <p className={styles['contact-name']}>Person 1</p>
          <p className={styles['contact-mobile']}>+91-123456789</p>
        </div>
        <div className={styles['card']}>
          <img src="https://picsum.photos/300/300"></img>
          <p className={styles['contact-name']}>Person 2</p>
          <p className={styles['contact-mobile']}>+91-123456789</p>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
