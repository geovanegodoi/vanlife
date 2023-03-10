import { render } from '@testing-library/react';

import VanPricingPage from './van-pricing-page';

describe('VanPricingPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VanPricingPage />);
    expect(baseElement).toBeTruthy();
  });
});
