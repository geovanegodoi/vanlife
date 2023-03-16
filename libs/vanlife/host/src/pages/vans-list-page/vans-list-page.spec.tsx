import { render } from '@testing-library/react';

import VansListPage from './vans-list-page';

describe('VansListPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VansListPage />);
    expect(baseElement).toBeTruthy();
  });
});
