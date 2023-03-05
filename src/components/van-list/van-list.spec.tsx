import { render } from '@testing-library/react';

import VanList from './van-list';

describe('VanList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VanList />);
    expect(baseElement).toBeTruthy();
  });
});
