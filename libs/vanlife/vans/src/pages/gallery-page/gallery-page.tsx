import { ShellPage } from '@vanlife/vanlife/shared';
import styles from './gallery-page.module.css';
import { VanFilter } from '../../ui/van-filter';
import { VanList } from '../../ui/van-list';
import { MockData } from '../../mocks/MockData';

/* eslint-disable-next-line */
export interface GalleryPageProps {}

export function GalleryPage(props: GalleryPageProps) {
  return (
    <ShellPage>
      <div style={{ padding: '2em' }}>
        <h1 className={styles['vans-page-title']}>Explore our van options</h1>
        <VanFilter />
        <VanList items={MockData} />
      </div>
    </ShellPage>
  );
}

export default GalleryPage;
