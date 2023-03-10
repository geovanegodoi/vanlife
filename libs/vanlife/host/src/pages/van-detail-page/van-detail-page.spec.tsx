import { render } from '@testing-library/react';

import VanDetailPage from './van-detail-page';

describe('VanDetailPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VanDetailPage />);
    expect(baseElement).toBeTruthy();
  });
});
