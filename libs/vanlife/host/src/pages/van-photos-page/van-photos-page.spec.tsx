import { render } from '@testing-library/react';

import VanPhotosPage from './van-photos-page';

describe('VanPhotosPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VanPhotosPage />);
    expect(baseElement).toBeTruthy();
  });
});
