import { render } from '@testing-library/react';

import { LayoutPage } from './layout-page';

describe('Shell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutPage />);
    expect(baseElement).toBeTruthy();
  });
});
