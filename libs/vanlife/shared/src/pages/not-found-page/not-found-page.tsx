import { Link } from 'react-router-dom';
import styles from './not-found-page.module.css';

/* eslint-disable-next-line */
export interface NotFoundPageProps {}

export function NotFoundPage(props: NotFoundPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default NotFoundPage;
