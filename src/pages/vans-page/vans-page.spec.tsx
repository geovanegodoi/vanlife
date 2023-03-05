import { render } from '@testing-library/react';

import VansPage from './vans-page';

describe('VansPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VansPage />);
    expect(baseElement).toBeTruthy();
  });
});
