import { Link } from 'react-router-dom';
import styles from './score.module.css';
import star from '../../assets/star.svg';

/* eslint-disable-next-line */
export interface ScoreProps {}

export function Score(props: ScoreProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['score-container']}>
        <p className={styles['score-title']}>Review score</p>
        <div className={styles['score-value-container']}>
          <img src={star} alt="score" />
          <p className={styles['score-value']}>
            5.0<span>/5</span>
          </p>
        </div>
      </div>
      <Link to="">Details</Link>
    </div>
  );
}

export default Score;
