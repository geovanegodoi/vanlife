import { render } from '@testing-library/react';

import VanDetailHeader from './van-detail-header';

describe('VanDetailHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VanDetailHeader />);
    expect(baseElement).toBeTruthy();
  });
});
