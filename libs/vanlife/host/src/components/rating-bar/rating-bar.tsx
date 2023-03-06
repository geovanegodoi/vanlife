import styles from './rating-bar.module.css';

/* eslint-disable-next-line */
export interface RatingBarProps {
  value: number;
}

export function RatingBar({ value }: RatingBarProps) {
  const width = `${value}%`;
  return (
    <div className={styles['container']}>
      <div className={styles['value']} style={{ width }}></div>
    </div>
  );
}

export default RatingBar;
