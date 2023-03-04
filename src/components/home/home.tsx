import styles from './home.module.css';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <div className={styles['container']}>
      <div>
        <p className={styles['home-title']}>
          You got the travel plans, we got the travel vans.
        </p>
        <p className={styles['home-subtitle']}>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
      </div>
      <button className={styles['home-button']}>Find your van</button>
    </div>
  );
}

export default Home;
