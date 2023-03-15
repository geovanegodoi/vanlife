import { render } from '@testing-library/react';

import GalleryPage from './gallery-page';

describe('GalleryPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GalleryPage />);
    expect(baseElement).toBeTruthy();
  });
});
