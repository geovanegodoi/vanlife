import styles from './gallery-page.module.css';
import { VanFilter, VanList } from '../../components';
import { useVansData } from '@vanlife/vanlife/shared';
import { useVansFilter } from '../../hooks';

/* eslint-disable-next-line */
export interface GalleryPageProps {}

export function GalleryPage(props: GalleryPageProps) {
  const { filterType } = useVansFilter();
  const { loading, vans } = useVansData(filterType);

  return (
    <div style={{ padding: '2em' }}>
      <h1 className={styles['vans-page-title']}>Explore our van options</h1>
      <VanFilter />
      <VanList items={vans || []} isLoading={loading} />
    </div>
  );
}

export default GalleryPage;
