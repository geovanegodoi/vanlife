// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AboutPage } from '@vanlife/vanlife/about';
import { HomePage } from '@vanlife/vanlife/home';
import { HostPage } from '@vanlife/vanlife/host';
import { LayoutPage } from '@vanlife/vanlife/shared';
import { GalleryPage, DetailPage } from '@vanlife/vanlife/vans';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/vans" element={<GalleryPage />} />
          <Route path="/vans/:id" element={<DetailPage />} />
          <Route path="/host" element={<HostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
