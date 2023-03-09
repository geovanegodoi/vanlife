import RatingLevelBar, {
  RatingLevelBarProps,
} from '../rating-item/rating-item';
import styles from './rating.module.css';
import StarImg from '../../assets/star.svg';

/* eslint-disable-next-line */
export interface OverallRatingProps {}

const ratings = [
  { stars: 5, value: 100 },
  { stars: 4, value: 75 },
  { stars: 3, value: 50 },
  { stars: 2, value: 25 },
  { stars: 1, value: 0 },
] as RatingLevelBarProps[];

export function OverallRating(props: OverallRatingProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['title-container']}>
        <h1>5.0</h1>
        <img src={StarImg} alt="rating" />
        <p>overall rating</p>
      </div>
      {ratings.map((item) => (
        <RatingLevelBar {...item} />
      ))}
    </div>
  );
}

export default OverallRating;
