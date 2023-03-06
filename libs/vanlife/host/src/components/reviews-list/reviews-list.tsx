import ReviewCard from '../review-card/review-card';
import styles from './reviews-list.module.css';

/* eslint-disable-next-line */
export interface ReviewsListProps {}

export function ReviewsList(props: ReviewsListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReviewsList!</h1>
      <ReviewCard />
      <ReviewCard />
    </div>
  );
}

export default ReviewsList;
