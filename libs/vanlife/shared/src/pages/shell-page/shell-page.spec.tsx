import { render } from '@testing-library/react';

import Shell, { ShellPage } from './shell-page';

describe('Shell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShellPage />);
    expect(baseElement).toBeTruthy();
  });
});
