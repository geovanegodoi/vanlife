import { render } from '@testing-library/react';

import IncomeHistory from './income-history';

describe('IncomeHistory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IncomeHistory />);
    expect(baseElement).toBeTruthy();
  });
});
