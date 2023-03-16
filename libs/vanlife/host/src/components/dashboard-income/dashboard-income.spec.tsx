import { render } from '@testing-library/react';

import DashboardIncome from './dashboard-income';

describe('DashboardIncome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardIncome />);
    expect(baseElement).toBeTruthy();
  });
});
