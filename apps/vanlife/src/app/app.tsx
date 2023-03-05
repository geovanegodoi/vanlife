// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AboutPage } from '@vanlife/vanlife/about';
import { HomePage } from '@vanlife/vanlife/home';
import { GalleryPage, DetailPage } from '@vanlife/vanlife/vans';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vans" element={<GalleryPage />} />
        <Route path="/vans/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
