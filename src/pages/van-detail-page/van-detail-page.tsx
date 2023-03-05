import styles from './van-detail-page.module.css';
import { Footer, Navbar } from 'src/components';
import { VanDetail } from 'src/components/van-detail';
import { MockData } from 'src/mocks/MockData';

/* eslint-disable-next-line */
export interface VanDetailPageProps {}

export function VanDetailPage(props: VanDetailPageProps) {
  return (
    <>
      <Navbar />
      <div className={styles['container']}>
        <VanDetail {...MockData[0]} />
      </div>
      <Footer />
    </>
  );
}

export default VanDetailPage;
