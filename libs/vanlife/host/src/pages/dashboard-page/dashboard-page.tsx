import { DashboardIncome, HostListVans, Score } from '../../components';
import styles from './dashboard-page.module.css';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface DashboardPageProps {}

export function DashboardPage(props: DashboardPageProps) {
  return (
    <div className={styles['container']}>
      <DashboardIncome />
      <Score />
      <HostListVansTitle />
      <HostListVans />
    </div>
  );
}

function HostListVansTitle() {
  return (
    <div className={styles['list-title-container']}>
      <p className={styles['list-title']}>Your listed vans</p>
      <Link className={styles['link-view-all']} to="/host/vans">
        View all
      </Link>
    </div>
  );
}

export default DashboardPage;
