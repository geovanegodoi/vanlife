import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../../components';
import { OneOrMany } from '../../types';

import styles from './layout-page.module.css';

/* eslint-disable-next-line */
export interface LayoutPageProps {
  logout: OneOrMany<JSX.Element>;
}

export function LayoutPage(props: LayoutPageProps) {
  return (
    <div className={styles['container']}>
      <Header {...props} />
      <div className={styles['container']}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default LayoutPage;
