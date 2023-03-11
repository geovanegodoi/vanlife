import { ReviewTitle, OverallRating } from '../../components';
import ReviewsList from '../../components/reviews-list/reviews-list';
import styles from './reviews-page.module.css';
import { ReviewModel } from '@vanlife/vanlife/shared';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface ReviewsPageProps {}

export function ReviewsPage(props: ReviewsPageProps) {
  const [reviews, setReviews] = useState<ReviewModel[]>([]);
  useEffect(() => {
    fetch('/api/reviews')
      .then((res) => res.json())
      .then((json) => setReviews(json.reviews));
  }, []);

  return (
    <div className={styles['container']}>
      <ReviewTitle />
      <OverallRating />
      <ReviewsList reviews={reviews} />
    </div>
  );
}

export default ReviewsPage;
