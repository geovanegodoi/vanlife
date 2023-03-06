import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../../components';

import styles from './layout-page.module.css';

/* eslint-disable-next-line */
export interface LayoutPageProps {
  children?: JSX.Element | JSX.Element[];
}

export function LayoutPage() {
  return (
    <>
      <Header />
      <div className={styles['container']}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default LayoutPage;
