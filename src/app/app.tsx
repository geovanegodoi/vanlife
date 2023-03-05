// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutPage, HomePage, VanDetailPage, VansPage } from 'src/pages';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vans" element={<VansPage />} />
        <Route path="/van-detail" element={<VanDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
