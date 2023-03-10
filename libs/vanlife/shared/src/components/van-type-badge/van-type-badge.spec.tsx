import { render } from '@testing-library/react';

import VanTypeBadge from './van-type-badge';

describe('VanTypeBadge', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VanTypeBadge />);
    expect(baseElement).toBeTruthy();
  });
});
