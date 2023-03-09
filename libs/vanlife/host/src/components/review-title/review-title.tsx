import styles from './review-title.module.css';

/* eslint-disable-next-line */
export interface ReviewTitleProps {}

export function ReviewTitle(props: ReviewTitleProps) {
  return (
    <div className={styles['container']}>
      <h1 className={styles['reviews-title']}>Your reviews</h1>
      <p className={styles['reviews-last-days']}>
        last <span>30 days</span>
      </p>
    </div>
  );
}

export default ReviewTitle;
