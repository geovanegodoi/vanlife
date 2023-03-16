import { render } from '@testing-library/react';

import VanLayoutPage from './van-layout-page';

describe('VanDetailPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VanLayoutPage />);
    expect(baseElement).toBeTruthy();
  });
});
