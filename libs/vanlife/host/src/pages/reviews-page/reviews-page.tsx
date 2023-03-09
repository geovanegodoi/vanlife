import { ReviewTitle, OverallRating } from '../../components';
import ReviewsList from '../../components/reviews-list/reviews-list';
import styles from './reviews-page.module.css';
import { ReviewsData } from '@vanlife/vanlife/shared';

/* eslint-disable-next-line */
export interface ReviewsPageProps {}

export function ReviewsPage(props: ReviewsPageProps) {
  return (
    <div className={styles['container']}>
      <ReviewTitle />
      <OverallRating />
      <ReviewsList reviews={ReviewsData} />
    </div>
  );
}

export default ReviewsPage;
