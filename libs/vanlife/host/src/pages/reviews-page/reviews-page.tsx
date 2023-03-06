import styles from './reviews-page.module.css';

/* eslint-disable-next-line */
export interface ReviewsPageProps {}

export function ReviewsPage(props: ReviewsPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReviewsPage!</h1>
    </div>
  );
}

export default ReviewsPage;
