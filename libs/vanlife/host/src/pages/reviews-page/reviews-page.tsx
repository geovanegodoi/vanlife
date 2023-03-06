import { Rating } from '../../components';
import ReviewsList from '../../components/reviews-list/reviews-list';
import styles from './reviews-page.module.css';

/* eslint-disable-next-line */
export interface ReviewsPageProps {}

export function ReviewsPage(props: ReviewsPageProps) {
  return (
    <div className={styles['container']}>
      <ReviewTitle />
      <Rating />
      <ReviewsList />
    </div>
  );
}

function ReviewTitle() {
  return (
    <div className={styles['reviews-title-container']}>
      <h1 className={styles['reviews-title']}>Your reviews</h1>
      <p className={styles['reviews-last-days']}>
        last <span>30 days</span>
      </p>
    </div>
  );
}

export default ReviewsPage;
