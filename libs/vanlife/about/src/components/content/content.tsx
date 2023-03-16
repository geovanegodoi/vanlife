import styles from './content.module.css';

/* eslint-disable-next-line */
export interface ContentProps {}

export function Content(props: ContentProps) {
  return (
    <div className={styles['container']}>
      <p className={styles['about-title']}>
        Don’t squeeze in a sedan when you could relax in a van.
      </p>
      <p className={styles['about-text']}>
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch. (Hitch costs extra) Our team is full
        of vanlife enthusiasts who know firsthand the magic of touring the world
        on 4 wheels.
      </p>
    </div>
  );
}

export default Content;
