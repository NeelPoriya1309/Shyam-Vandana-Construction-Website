import styles from './ContactUs.module.css';

function ContactUs() {
  return (
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
  );
}

export default ContactUs;
