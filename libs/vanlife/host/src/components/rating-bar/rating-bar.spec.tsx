import { render } from '@testing-library/react';

import RatingBar from './rating-bar';

describe('RatingBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RatingBar />);
    expect(baseElement).toBeTruthy();
  });
});
