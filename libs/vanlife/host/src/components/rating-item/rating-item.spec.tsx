import { render } from '@testing-library/react';

import RatingItem from './rating-item';

describe('RatingItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RatingItem />);
    expect(baseElement).toBeTruthy();
  });
});
