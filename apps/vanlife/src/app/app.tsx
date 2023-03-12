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
import {
  Error,
  LayoutPage,
  NotFoundPage,
  startMockAPI,
} from '@vanlife/vanlife/shared';
import {
  DetailPage,
  GalleryPage,
  loaderGalleryPage,
} from '@vanlife/vanlife/vans';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutPage />}>
      <Route path="*" element={<NotFoundPage />} />
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route
        path="vans"
        element={<GalleryPage />}
        loader={loaderGalleryPage}
        errorElement={<Error />}
      />
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
  )
);

export function App() {
  startMockAPI();
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<LayoutPage />}>
    //       <Route path="*" element={<NotFoundPage />} />
    //       <Route index element={<HomePage />} />
    //       <Route path="about" element={<AboutPage />} />
    //       <Route path="vans" element={<GalleryPage />} />
    //       <Route path="vans/:id" element={<DetailPage />} />
    //       <Route path="host" element={<HostLayoutPage />}>
    //         <Route index element={<DashboardPage />} />
    //         <Route path="income" element={<IncomePage />} />
    //         <Route path="vans" element={<VansListPage />} />
    //         <Route path="vans/:id" element={<VanLayoutPage />}>
    //           <Route index element={<VanDetailPage />} />
    //           <Route path="pricing" element={<VanPricingPage />} />
    //           <Route path="photos" element={<VanPhotosPage />} />
    //         </Route>
    //         <Route path="reviews" element={<ReviewsPage />} />
    //       </Route>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
