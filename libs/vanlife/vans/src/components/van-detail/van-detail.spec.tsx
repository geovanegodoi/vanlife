import { render } from '@testing-library/react';

import VanDetail from './van-detail';

describe('VanDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VanDetail />);
    expect(baseElement).toBeTruthy();
  });
});
