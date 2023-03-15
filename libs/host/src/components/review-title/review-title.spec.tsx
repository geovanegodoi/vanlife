import { render } from '@testing-library/react';

import ReviewTitle from './review-title';

describe('ReviewTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewTitle />);
    expect(baseElement).toBeTruthy();
  });
});
