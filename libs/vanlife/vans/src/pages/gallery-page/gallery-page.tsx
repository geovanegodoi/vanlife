import styles from './gallery-page.module.css';
import { VanFilter, VanList } from '../../components';
import { MockData } from '../../mocks/MockData';

/* eslint-disable-next-line */
export interface GalleryPageProps {}

export function GalleryPage(props: GalleryPageProps) {
  return (
    <div style={{ padding: '2em' }}>
      <h1 className={styles['vans-page-title']}>Explore our van options</h1>
      <VanFilter />
      <VanList items={MockData} />
    </div>
  );
}

export default GalleryPage;
