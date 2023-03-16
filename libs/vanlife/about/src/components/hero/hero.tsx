import styles from './hero.module.css';

/* eslint-disable-next-line */
export interface HeroProps {}

export function Hero(props: HeroProps) {
  return (
    <div className={styles['container']}>
      <p className={styles['hero-title']}>
        Your destination is waiting. Your van is ready.
      </p>
      <button className={styles['hero-button']}>Explore our vans</button>
    </div>
  );
}

export default Hero;
