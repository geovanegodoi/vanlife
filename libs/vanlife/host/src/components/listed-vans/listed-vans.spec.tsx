import { render } from '@testing-library/react';

import ListedVans from './listed-vans';

describe('ListedVans', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListedVans />);
    expect(baseElement).toBeTruthy();
  });
});
