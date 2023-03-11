import { DashboardIncome, HostListVans, Score } from '../../components';
import styles from './dashboard-page.module.css';
import { Link } from 'react-router-dom';
import { useVansData } from '@vanlife/vanlife/shared';

/* eslint-disable-next-line */
export interface DashboardPageProps {}

export function DashboardPage(props: DashboardPageProps) {
  const [vans] = useVansData();
  return (
    <div className={styles['container']}>
      <DashboardIncome />
      <Score />
      <HostListVansTitle />
      <HostListVans items={vans?.slice(0, 3) || []} />
    </div>
  );
}

function HostListVansTitle() {
  return (
    <div className={styles['list-title-container']}>
      <p className={styles['list-title']}>Your listed vans</p>
      <Link className={styles['link-view-all']} to="">
        View all
      </Link>
    </div>
  );
}

export default DashboardPage;
