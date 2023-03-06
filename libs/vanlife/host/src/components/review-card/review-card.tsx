import styles from './review-card.module.css';

/* eslint-disable-next-line */
export interface ReviewCardProps {}

export function ReviewCard(props: ReviewCardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReviewCard!</h1>
    </div>
  );
}

export default ReviewCard;
