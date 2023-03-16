import { render } from '@testing-library/react';

import VanFilter from './van-filter';

describe('VanFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VanFilter />);
    expect(baseElement).toBeTruthy();
  });
});
