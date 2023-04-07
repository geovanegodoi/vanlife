import { render } from '@testing-library/react';

import IncomeHead from './income-head';

describe('IncomeHead', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IncomeHead />);
    expect(baseElement).toBeTruthy();
  });
});
