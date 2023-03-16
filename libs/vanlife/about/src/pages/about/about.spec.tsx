import { render } from '@testing-library/react';

import AboutPage from './about';

describe('Main', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AboutPage />);
    expect(baseElement).toBeTruthy();
  });
});
