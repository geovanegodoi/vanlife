import { render } from '@testing-library/react';

import DetailPage from './detail-page';

describe('DetailPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailPage />);
    expect(baseElement).toBeTruthy();
  });
});
