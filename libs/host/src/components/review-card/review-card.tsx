import RatingStars from '../rating-stars/rating-stars';
import styles from './review-card.module.css';

/* eslint-disable-next-line */
export interface ReviewCardProps {
  rating: number;
  user: string;
  date: string;
  text: string;
}

export function ReviewCard({ rating, user, date, text }: ReviewCardProps) {
  return (
    <div className={styles['container']}>
      <RatingStars rating={rating} />
      <div className={styles['review-name-date-container']}>
        <p className={styles['review-name']}>{user}</p>
        <p className={styles['review-date']}>{date}</p>
      </div>
      <p className={styles['review-text']}>{text}</p>
    </div>
  );
}

export default ReviewCard;
