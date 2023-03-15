import { Navbar, NavbarOptions } from '@vanlife/shared';
import { Outlet } from 'react-router-dom';
import styles from './host-layout-page.module.css';

/* eslint-disable-next-line */
export interface HostLayoutPageProps {}

const options = [
  {
    text: 'Dashboard',
    target: '/host',
    end: true,
  },
  {
    text: 'Income',
    target: 'income',
  },
  {
    text: 'Vans',
    target: 'vans',
  },
  {
    text: 'Reviews',
    target: 'reviews',
  },
] as NavbarOptions;

export function HostLayoutPage(props: HostLayoutPageProps) {
  return (
    <>
      <div className={styles['container']}>
        <Navbar options={options} defaultOption={options[0].text} />
      </div>
      <Outlet />
    </>
  );
}

export default HostLayoutPage;
