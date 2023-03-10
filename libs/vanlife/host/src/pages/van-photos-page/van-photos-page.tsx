import { VansData } from '@vanlife/vanlife/shared';
import { useOutletContext, useParams } from 'react-router-dom';
import styles from './van-photos-page.module.css';

/* eslint-disable-next-line */
export interface VanPhotosPageProps {}

interface VanPhotosPageData {
  imageUrl: string;
  name: string;
}

export function VanPhotosPage(props: VanPhotosPageProps) {
  const context = useOutletContext<VanPhotosPageData>();
  return (
    <div className={styles['container']}>
      <img
        className={styles['van-photo-image']}
        src={context.imageUrl}
        alt={context.name}
      />
    </div>
  );
}

export default VanPhotosPage;
