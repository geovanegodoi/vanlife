import { render } from '@testing-library/react';

import VanCard from './van-card';

describe('VanCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VanCard />);
    expect(baseElement).toBeTruthy();
  });
});
