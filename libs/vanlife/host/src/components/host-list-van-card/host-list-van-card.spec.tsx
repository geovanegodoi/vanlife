import { render } from '@testing-library/react';

import HostListVanCard from './host-list-van-card';

describe('ListedVanCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HostListVanCard />);
    expect(baseElement).toBeTruthy();
  });
});
