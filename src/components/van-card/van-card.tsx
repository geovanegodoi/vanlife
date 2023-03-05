import { Link } from 'react-router-dom';
import { VanType, VanTypeBadge } from '../van-type-badge';
import styles from './van-card.module.css';

/* eslint-disable-next-line */
export interface VanCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  type: VanType;
}

export function VanCard({ id, name, price, imageUrl, type }: VanCardProps) {
  return (
    <div className={styles['container']}>
      <Link to={`/vans/${id}`}>
        <img className={styles['card-image']} src={imageUrl} alt={name} />
        <div className={styles['card-summary']}>
          <label className={styles['card-van-name']}>{name}</label>
          <label className={styles['card-van-price']}>${price}</label>
        </div>
        <VanTypeBadge type={type} />
      </Link>
    </div>
  );
}

export default VanCard;
