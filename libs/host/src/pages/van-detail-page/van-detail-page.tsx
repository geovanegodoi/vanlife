import { VanType } from '@vanlife/shared';
import { useOutletContext } from 'react-router-dom';
import { DetailLabel } from '../../components';
import styles from './van-detail-page.module.css';

/* eslint-disable-next-line */
export interface VanDetailPageProps {}

interface VanDetailPageData {
  name: string;
  type: VanType;
  description: string;
  visibility: string;
}

export function VanDetailPage(props: VanDetailPageProps) {
  const context = useOutletContext<VanDetailPageData>();

  return (
    <div className={styles['container']}>
      <DetailLabel label="Name" value={context.name} />
      <DetailLabel label="Category" value={context.type} />
      <DetailLabel label="Description" value={context.description} />
      <DetailLabel label="Visibility" value={context.visibility} />
    </div>
  );
}

export default VanDetailPage;
