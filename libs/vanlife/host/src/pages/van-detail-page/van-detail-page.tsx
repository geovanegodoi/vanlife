import { VansData, VanType } from '@vanlife/vanlife/shared';
import { useParams } from 'react-router-dom';
import { DetailLabel } from '../../components';
import styles from './van-detail-page.module.css';

/* eslint-disable-next-line */
export interface VanDetailPageProps {
  // name: string;
  // type: VanType;
  // description: string;
  // visibility: string;
}

export function VanDetailPage(props: VanDetailPageProps) {
  const { id } = useParams();
  const { name, type, description, visibility } = VansData.find(
    (item) => item.id === id
  );

  return (
    <div className={styles['container']}>
      <DetailLabel label="Name" value={name} />
      <DetailLabel label="Category" value={type} />
      <DetailLabel label="Description" value={description} />
      <DetailLabel label="Visibility" value={visibility} />
    </div>
  );
}

export default VanDetailPage;
