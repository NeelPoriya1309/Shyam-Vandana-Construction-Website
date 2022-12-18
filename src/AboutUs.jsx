import styles from './AboutUs.module.css';

function AboutUs() {
  return (
    <section id="about" className={styles['about']}>
      <div className={styles['title']}>
        <h2>About Us</h2>
        <div className={styles['bar']}></div>
      </div>
      <div className={styles['container']}>
        <div className={styles['feature']}>
          <div className={styles['ion-center']}>
            <ion-icon name="business"></ion-icon>
          </div>
          <p className={styles['feature-title']}>Started in 2012</p>
          <p className={styles['feature-description']}>
            Our company was established nearly {new Date().getFullYear() - 2012}{' '}
            years ago, and since then, we have worked hard to become a leader in
            our industry. We have a reputation for excellence, and we are proud
            of all that we have accomplished. Over the years, we have faced many
            challenges and overcome numerous obstacles, but we have always
            persevered and come out stronger as a result. We believe in the
            power of hard work and determination, and we are always striving to
            improve and grow.
          </p>
        </div>
        <div className={styles['feature']}>
          <div className={styles['ion-center']}>
            <ion-icon name="flower-outline"></ion-icon>
          </div>
          <p className={styles['feature-title']}>Values</p>
          <p className={styles['feature-description']}>
            We believe that our work has the power to inspire and empower
            others, and we are driven by a sense of purpose and a desire to make
            a positive difference. We are committed to excellence, innovation,
            and collaboration, and we are always looking for ways to push
            ourselves and grow as individuals and as a team. We are proud of the
            impact we have made so far, and we are excited for all that the
            future holds as we continue to make a difference through our work.
          </p>
        </div>
        <div className={styles['feature']}>
          <div className={styles['ion-center']}>
            <ion-icon name="person-circle-outline"></ion-icon>
          </div>
          <p className={styles['feature-title']}>Labour Force</p>
          <p className={styles['feature-description']}>
            At our company, we place a strong emphasis on managing our labor
            force effectively and efficiently.We also prioritize open
            communication and transparency, and we encourage our employees to
            voice their ideas and concerns. We believe that by fostering a
            collaborative and supportive environment, we can unlock the full
            potential of our labor force and drive business success. Overall,
            our commitment to managing our labor force well has been a key
            factor in our success as a company.
          </p>
        </div>
        <div className={styles['feature']}>
          <div className={styles['ion-center']}>
            <ion-icon name="people-outline"></ion-icon>
          </div>
          <p className={styles['feature-title']}>Client Satisfaction</p>
          <p className={styles['feature-description']}>
            At our company, client satisfaction is our top priority. We believe
            that happy clients are the key to our success, and we are dedicated
            to delivering the best possible experience to every single one of
            them. We take pride in delivering top-notch quality and exceptional
            customer service. We are grateful for the trust and confidence our
            clients have placed in us, and we are committed to earning it every
            day. We believe that by putting our clients first and striving for
            excellence in everything we do.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
