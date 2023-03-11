// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AboutPage } from '@vanlife/vanlife/about';
import { HomePage } from '@vanlife/vanlife/home';
import {
  HostLayoutPage,
  DashboardPage,
  IncomePage,
  ReviewsPage,
  VanDetailPage,
  VansListPage,
  VanLayoutPage,
  VanPricingPage,
  VanPhotosPage,
} from '@vanlife/vanlife/host';
import { LayoutPage, MockAPI, NotFoundPage } from '@vanlife/vanlife/shared';
import { GalleryPage, DetailPage } from '@vanlife/vanlife/vans';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function App() {
  MockAPI();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="vans" element={<GalleryPage />} />
          <Route path="vans/:id" element={<DetailPage />} />
          <Route path="host" element={<HostLayoutPage />}>
            <Route index element={<DashboardPage />} />
            <Route path="income" element={<IncomePage />} />
            <Route path="vans" element={<VansListPage />} />
            <Route path="vans/:id" element={<VanLayoutPage />}>
              <Route index element={<VanDetailPage />} />
              <Route path="pricing" element={<VanPricingPage />} />
              <Route path="photos" element={<VanPhotosPage />} />
            </Route>
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
