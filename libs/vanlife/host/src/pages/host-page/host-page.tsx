import { Navbar, NavbarOption } from '@vanlife/vanlife/shared';
import { DashboardIncome, ListedVans, Score } from '../../components';
import styles from './host-page.module.css';

/* eslint-disable-next-line */
export interface HostPageProps {}

const options = [
  {
    text: 'Dashboard',
    target: '',
  },
  {
    text: 'Income',
    target: '',
  },
  {
    text: 'Vans',
    target: '',
  },
  {
    text: 'Reviews',
    target: '',
  },
] as NavbarOption[];

export function HostPage(props: HostPageProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['host-navbar']}>
        <Navbar options={options} />
      </div>
      <DashboardIncome />
      <Score />
      <ListedVans />
    </div>
  );
}

export default HostPage;
