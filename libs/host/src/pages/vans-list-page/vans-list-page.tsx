import { HostListVans } from '../../components';
import styles from './vans-list-page.module.css';

/* eslint-disable-next-line */
export interface VansListPageProps {}

export function VansListPage(props: VansListPageProps) {
  return (
    <div className={styles['container']}>
      <h1 className={styles['vans-list-title']}>Your listed vans</h1>
      <HostListVans />
    </div>
  );
}

export default VansListPage;
