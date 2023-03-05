import { Footer, Navbar } from '@vanlife/vanlife/shared';
import styles from './gallery-page.module.css';
import { VanFilter } from '../../ui/van-filter';
import { VanList } from '../../ui/van-list';
import { MockData } from '../../mocks/MockData';

/* eslint-disable-next-line */
export interface GalleryPageProps {}

export function GalleryPage(props: GalleryPageProps) {
  return (
    <>
      <Navbar />
      <div className={styles['container']}>
        <h1 className={styles['vans-page-title']}>Explore our van options</h1>
        <VanFilter />
        <VanList items={MockData} />
      </div>
      <Footer />
    </>
  );
}

export default GalleryPage;
