import { ReviewTitle, OverallRating } from '../../components';
import ReviewsList from '../../components/reviews-list/reviews-list';
import styles from './reviews-page.module.css';
import { useReviewsData } from '@vanlife/vanlife/shared';

/* eslint-disable-next-line */
export interface ReviewsPageProps {}

export function ReviewsPage(props: ReviewsPageProps) {
  const { loading, reviews } = useReviewsData();

  return (
    <div className={styles['container']}>
      <ReviewTitle />
      <OverallRating />
      <ReviewsList reviews={reviews} isLoading={loading} />
    </div>
  );
}

export default ReviewsPage;
