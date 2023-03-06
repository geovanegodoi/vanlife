import RatingItem, { RatingItemProps } from '../rating-item/rating-item';
import styles from './rating.module.css';
import StarImg from '../../assets/star.svg';

/* eslint-disable-next-line */
export interface RatingProps {}

const ratings = [
  { stars: 5, value: 100 },
  { stars: 4, value: 75 },
  { stars: 3, value: 50 },
  { stars: 2, value: 25 },
  { stars: 1, value: 0 },
] as RatingItemProps[];

export function Rating(props: RatingProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['title-container']}>
        <h1>5.0</h1>
        <img src={StarImg} alt="rating" />
        <p>overall rating</p>
      </div>
      {ratings.map((item) => (
        <RatingItem {...item} />
      ))}
    </div>
  );
}

export default Rating;
