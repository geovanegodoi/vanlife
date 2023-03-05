import { Footer, Navbar, VanFilter } from 'src/components';
import VanList from 'src/components/van-list/van-list';
import { MockData } from 'src/mocks/MockData';
import styles from './vans-page.module.css';

/* eslint-disable-next-line */
export interface VansPageProps {}

export function VansPage(props: VansPageProps) {
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

export default VansPage;
