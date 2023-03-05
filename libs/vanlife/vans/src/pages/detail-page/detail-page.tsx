import styles from './detail-page.module.css';
import { useParams } from 'react-router-dom';
import { Footer, Navbar } from '@vanlife/vanlife/shared';
import { MockData } from '../../mocks/MockData';
import { VanDetail, VanDetailProps } from '../../ui/van-detail';

/* eslint-disable-next-line */
export interface DetailPageProps {}

export function DetailPage(props: DetailPageProps) {
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

export default DetailPage;
