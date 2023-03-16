import { render } from '@testing-library/react';

import HostPage from './dashboard-page';

describe('HostPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HostPage />);
    expect(baseElement).toBeTruthy();
  });
});
