import RatingBar from '../rating-bar/rating-bar';
import styles from './rating-item.module.css';

/* eslint-disable-next-line */
export interface RatingLevelBarProps {
  stars: number;
  value: number;
}

export function RatingItem({ stars, value }: RatingLevelBarProps) {
  return (
    <div className={styles['container']}>
      <p className={styles['rating-item-title']}>{`${stars} stars`}</p>
      <RatingBar value={value} />
      <p className={styles['rating-item-value']}>{value}%</p>
    </div>
  );
}

export default RatingItem;
