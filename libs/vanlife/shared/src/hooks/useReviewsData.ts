import { useEffect, useState } from 'react';
import { ReviewModel } from '../types';

export function useReviewsData() {
  const [reviews, setReviews] = useState<ReviewModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/reviews')
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setReviews(json.reviews);
      });
  }, []);

  return { loading, reviews };
}

export default useReviewsData;
