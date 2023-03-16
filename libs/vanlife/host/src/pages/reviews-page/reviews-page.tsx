import { ReviewTitle, OverallRating } from '../../components';
import ReviewsList from '../../components/reviews-list/reviews-list';
import styles from './reviews-page.module.css';
import {
  getHostReviews,
  LoadDeferredData,
  useReviewsData,
} from '@vanlife/shared';
import { defer, useLoaderData } from 'react-router-dom';
import { ReviewCardProps } from '../../components/review-card/review-card';

/* eslint-disable-next-line */
export interface ReviewsPageProps {}

export async function loaderReviewsPage() {
  const dataPromise = getHostReviews();
  return defer({ dataPromise });
}

export function ReviewsPage(props: ReviewsPageProps) {
  /* eslint-disable-next-line */
  /* @ts-ignore */
  const { dataPromise } = useLoaderData();

  return (
    <div className={styles['container']}>
      <ReviewTitle />
      <OverallRating />
      <LoadDeferredData resolve={dataPromise}>
        {(dataResolved) => {
          const reviewsData = dataResolved as ReviewCardProps[];
          return <ReviewsList reviews={reviewsData} />;
        }}
      </LoadDeferredData>
    </div>
  );
}

export default ReviewsPage;
