import { VansData } from '@vanlife/vanlife/shared';
import { useParams } from 'react-router-dom';
import styles from './van-photos-page.module.css';

/* eslint-disable-next-line */
export interface VanPhotosPageProps {}

export function VanPhotosPage(props: VanPhotosPageProps) {
  const { id } = useParams();
  const { imageUrl, name } = VansData.find((item) => item.id === id);
  return (
    <div className={styles['container']}>
      <img className={styles['van-photo-image']} src={imageUrl} alt={name} />
    </div>
  );
}

export default VanPhotosPage;
