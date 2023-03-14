import { render } from '@testing-library/react';

import LoadDeferredData from './load-deferred-data';

describe('DeferredDataLoad', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoadDeferredData />);
    expect(baseElement).toBeTruthy();
  });
});
