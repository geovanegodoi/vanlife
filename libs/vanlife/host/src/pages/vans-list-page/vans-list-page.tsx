import { useVansData } from '@vanlife/vanlife/shared';
import { HostListVans } from '../../components';
import styles from './vans-list-page.module.css';

/* eslint-disable-next-line */
export interface VansListPageProps {}

export function VansListPage(props: VansListPageProps) {
  const [vans] = useVansData();
  return (
    <div className={styles['container']}>
      <h1 className={styles['vans-list-title']}>Your listed vans</h1>
      <HostListVans items={vans.slice(0, 3)} />
    </div>
  );
}

export default VansListPage;
