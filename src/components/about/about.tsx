import styles from './about.module.css';
import AboutImage from 'src/assets/about.svg';

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <div className={styles['container']}>
      <img src={AboutImage} alt="About" />
      <p className={styles['about-title']}>
        Don’t squeeze in a sedan when you could relax in a van.
      </p>
      <p className={styles['about-content']}>
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch. (Hitch costs extra) Our team is full
        of vanlife enthusiasts who know firsthand the magic of touring the world
        on 4 wheels.
      </p>
      <div className={styles['about-important']}>
        <p className={styles['about-important-title']}>
          Your destination is waiting. Your van is ready.
        </p>
        <button className={styles['about-important-button']}>
          Explore our vans
        </button>
      </div>
    </div>
  );
}

export default About;
