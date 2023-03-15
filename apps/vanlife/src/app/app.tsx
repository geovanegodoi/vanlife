// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AboutPage } from 'libs/about/src';
import { HomePage } from '@vanlife/home';
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
  loaderVansList,
  loaderVanLayoutPage,
} from '@vanlife/host';
import {
  actionLogin,
  Authentication,
  AuthenticationProvider,
  LoginPage,
  Logout,
} from '@vanlife/login';
import { Error, LayoutPage, NotFoundPage } from '@vanlife/shared';
import {
  DetailPage,
  GalleryPage,
  loaderDetailPage,
  loaderGalleryPage,
} from '@vanlife/vans';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutPage logout={<Logout />} />}>
      <Route path="*" element={<NotFoundPage />} />
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="login" element={<LoginPage />} action={actionLogin} />
      <Route
        path="vans"
        element={<GalleryPage />}
        loader={loaderGalleryPage}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<DetailPage />}
        loader={loaderDetailPage}
        errorElement={<Error />}
      />

      <Route element={<Authentication />}>
        <Route path="host" element={<HostLayoutPage />}>
          <Route index element={<DashboardPage />} loader={loaderVansList} />
          <Route path="income" element={<IncomePage />} />
          <Route
            path="vans"
            element={<VansListPage />}
            loader={loaderVansList}
          />
          <Route
            path="vans/:id"
            element={<VanLayoutPage />}
            loader={loaderVanLayoutPage}
          >
            <Route index element={<VanDetailPage />} />
            <Route path="pricing" element={<VanPricingPage />} />
            <Route path="photos" element={<VanPhotosPage />} />
          </Route>
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
      </Route>
    </Route>
  )
);

export function App() {
  return (
    <AuthenticationProvider>
      <RouterProvider router={router} />
    </AuthenticationProvider>
  );
}

export default App;
