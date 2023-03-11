import { Loading } from '@vanlife/vanlife/shared';
import ReviewCard, { ReviewCardProps } from '../review-card/review-card';
import styles from './reviews-list.module.css';

/* eslint-disable-next-line */
export interface ReviewsListProps {
  reviews: ReviewCardProps[];
  isLoading: boolean;
}

export function ReviewsList({ reviews, isLoading }: ReviewsListProps) {
  return (
    <Loading isLoading={isLoading}>
      <div className={styles['container']}>
        <h1 className={styles['reviews-list-count']}>
          Reviews ({reviews.length})
        </h1>
        {reviews.map((item, index) => (
          <ReviewCard key={index} {...item} />
        ))}
      </div>
    </Loading>
  );
}

export default ReviewsList;
