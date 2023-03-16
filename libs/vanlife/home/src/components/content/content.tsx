import styles from './content.module.css';

/* eslint-disable-next-line */
export interface ContentProps {}

export function Content(props: ContentProps) {
  return (
    <>
      <p className={styles['content-title']}>
        You got the travel plans, we got the travel vans.
      </p>
      <p className={styles['content-subtitle']}>
        Add adventure to your life by joining the #vanlife movement. Rent
        theperfect van to make your perfect road trip.
      </p>
    </>
  );
}

export default Content;
