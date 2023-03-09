import styles from './rating-stars.module.css';
import Star from '../../assets/star.svg';

/* eslint-disable-next-line */
export interface RatingStarsProps {
  rating: number;
}

export function RatingStars({ rating }: RatingStarsProps) {
  return (
    <div className={styles['container']}>
      {[...Array(rating)].map(() => (
        <img src={Star} alt="star" />
      ))}
    </div>
  );
}

export default RatingStars;
