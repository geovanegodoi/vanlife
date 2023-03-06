import { DashboardIncome, ListedVans, Score } from '../../components';
import styles from './host-page.module.css';

/* eslint-disable-next-line */
export interface HostPageProps {}

export function HostPage(props: HostPageProps) {
  return (
    <div className={styles['container']}>
      <DashboardIncome />
      <Score />
      <ListedVans />
    </div>
  );
}

export default HostPage;
