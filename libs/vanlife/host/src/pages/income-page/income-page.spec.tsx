import { render } from '@testing-library/react';

import IncomePage from './income-page';

describe('IncomePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IncomePage />);
    expect(baseElement).toBeTruthy();
  });
});
