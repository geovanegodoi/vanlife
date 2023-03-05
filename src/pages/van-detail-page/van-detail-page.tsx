import styles from './van-detail-page.module.css';
import { Footer, Navbar } from 'src/components';
import { VanDetail } from 'src/components/van-detail';
import { MockData } from 'src/mocks/MockData';
import { useParams } from 'react-router-dom';
import { VanDetailProps } from 'src/components/van-detail/van-detail';

/* eslint-disable-next-line */
export interface VanDetailPageProps {}

export function VanDetailPage(props: VanDetailPageProps) {
  const { id } = useParams();
  const vanDetailData =
    MockData.find((item) => item.id === id) || ({} as VanDetailProps);

  return (
    <>
      <Navbar />
      <div className={styles['container']}>
        <VanDetail {...vanDetailData} />
      </div>
      <Footer />
    </>
  );
}

export default VanDetailPage;
