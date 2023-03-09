import { DashboardIncome, ListedVans, Score } from '../../components';
import styles from './host-page.module.css';
import { VansData } from '@vanlife/vanlife/shared';

/* eslint-disable-next-line */
export interface HostPageProps {}

export function HostPage(props: HostPageProps) {
  return (
    <div className={styles['container']}>
      <DashboardIncome />
      <Score />
      <ListedVans items={VansData} />
    </div>
  );
}

export default HostPage;
