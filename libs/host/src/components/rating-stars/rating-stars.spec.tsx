import { render } from '@testing-library/react';

import RatingStars from './rating-stars';

describe('RatingStars', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RatingStars />);
    expect(baseElement).toBeTruthy();
  });
});
