import { render } from '@testing-library/react';

import ListedVanCard from './listed-van-card';

describe('ListedVanCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListedVanCard />);
    expect(baseElement).toBeTruthy();
  });
});
