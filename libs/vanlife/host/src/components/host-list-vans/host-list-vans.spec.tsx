import { render } from '@testing-library/react';
import { HostListVanCardProps } from '../host-list-van-card/host-list-van-card';

import HostListVans from './host-list-vans';

describe('ListedVans', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HostListVans items={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
