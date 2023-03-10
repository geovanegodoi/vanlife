import { VanType } from '@vanlife/vanlife/shared';
import { VanTypeBadge } from 'libs/vanlife/vans/src/components';
import styles from './van-detail-header.module.css';

/* eslint-disable-next-line */
export interface VanDetailHeaderProps {
  imageUrl: string;
  type: VanType;
  name: string;
  price: number;
}

export function VanDetailHeader({
  imageUrl,
  type,
  name,
  price,
}: VanDetailHeaderProps) {
  return (
    <div className={styles['container']}>
      <img
        className={styles['van-detail-header-image']}
        src={imageUrl}
        alt={name}
      />
      <div className={styles['van-detail-data-container']}>
        <p>
          <VanTypeBadge type={type} />
        </p>
        <p className={styles['van-detail-header-name']}>{name}</p>
        <p className={styles['van-detail-header-price']}>
          <span>${price}</span>/day
        </p>
      </div>
    </div>
  );
}

export default VanDetailHeader;
