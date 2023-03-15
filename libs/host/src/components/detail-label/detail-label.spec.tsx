import { render } from '@testing-library/react';

import DetailLabel from './detail-label';

describe('DetailLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailLabel />);
    expect(baseElement).toBeTruthy();
  });
});
