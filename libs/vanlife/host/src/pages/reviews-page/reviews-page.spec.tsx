import { render } from '@testing-library/react';

import ReviewsPage from './reviews-page';

describe('ReviewsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewsPage />);
    expect(baseElement).toBeTruthy();
  });
});
