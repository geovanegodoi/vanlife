import { render } from '@testing-library/react';

import HostLayoutPage from './host-layout-page';

describe('HostLayoutPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HostLayoutPage />);
    expect(baseElement).toBeTruthy();
  });
});
