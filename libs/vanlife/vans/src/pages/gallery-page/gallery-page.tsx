import styles from './gallery-page.module.css';
import { VanFilter, VanList } from '../../components';
import useVansFilter from '../../hooks/useVansFilter';

/* eslint-disable-next-line */
export interface GalleryPageProps {}

export function GalleryPage(props: GalleryPageProps) {
  const { filteredItems } = useVansFilter();

  return (
    <div style={{ padding: '2em' }}>
      <h1 className={styles['vans-page-title']}>Explore our van options</h1>
      <VanFilter />
      <VanList items={filteredItems} />
    </div>
  );
}

export default GalleryPage;
